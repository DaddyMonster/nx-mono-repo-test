import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private book_repo: Repository<Book>) {}

  async getAllBooks() {
    return this.book_repo.find();
  }

  async getBookById(id: number) {
    return this.book_repo.findOneOrFail(id);
  }

  async createBook(input: CreateBookInput) {
    return this.book_repo.save(input);
  }
}
