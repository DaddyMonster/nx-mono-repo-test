import { Injectable } from '@nestjs/common';
import { Args, ID, Query, Mutation } from '@nestjs/graphql';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BookResolver {
  constructor(private book_srv: BookService) {}

  @Query(() => [Book])
  async getAllBooks() {
    return this.book_srv.getAllBooks();
  }

  @Query(() => Book)
  async getBookById(@Args('bookId', { type: () => ID }) id: number) {
    return this.book_srv.getBookById(id);
  }

  @Mutation(() => Book)
  async createBook(@Args('createBookInput') args: CreateBookInput) {
    return this.book_srv.createBook(args);
  }
}
