import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Book } from '../book/book.entity';
import { Author } from './author.entity';
import { CreateAuthorDTO } from './dto/author.dto';
import { groupBy } from 'lodash';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private author_repo: Repository<Author>,
    @InjectRepository(Book) private book_repo: Repository<Book>
  ) {}

  async findAllAuthor(): Promise<Author[]> {
    return this.author_repo.find();
  }

  async findOne(id: number): Promise<Author> {
    return this.author_repo.findOneOrFail(id);
  }

  async createAuthor({
    name,
    age,
    homepage,
  }: CreateAuthorDTO): Promise<Author> {
    const newAuthor = this.author_repo.create({ name, age, homepage });
    await this.author_repo.save(newAuthor);
    return newAuthor;
  }

  async findWrittenBooks(ids: readonly number[]) {
    const res = await this.book_repo.find({
      where: { authorId: In(ids as number[]) },
    });
    const map = groupBy(res, (item) => item.authorId);
    return ids.map((id) => map[id] ?? []);
  }
}
