import {
  Resolver,
  Query,
  Args,
  ID,
  Mutation,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import * as DataLoader from 'dataloader';
import { Loader } from 'nestjs-dataloader';
import { Book } from '../book/book.entity';
import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/author.dto';
import { WrittenBookLoader } from './loader/writtenbook.loader';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private author_srv: AuthorService) {}

  @ResolveField()
  async writtenBooks(
    @Root() { id }: Author,
    @Loader(WrittenBookLoader.name) loader: DataLoader<Author['id'], Book>
  ): Promise<Book> {
    return loader.load(id);
  }

  @Query(() => [Author])
  async getAuthors() {
    return this.author_srv.findAllAuthor();
  }

  @Query(() => Author)
  async findAuthor(@Args('id', { type: () => ID }) id: number) {
    return this.author_srv.findOne(id);
  }

  @Mutation(() => Author)
  async createAuthor(@Args('authorInput') authorInput: CreateAuthorDTO) {
    return this.author_srv.createAuthor(authorInput);
  }
}
