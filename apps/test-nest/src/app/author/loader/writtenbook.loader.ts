import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { NestDataLoader } from 'nestjs-dataloader';
import { Book } from '../../book/book.entity';
import { AuthorService } from '../author.service';

@Injectable()
export class WrittenBookLoader implements NestDataLoader<number, Book[]> {
  constructor(private author_repo: AuthorService) {}

  generateDataLoader(): DataLoader<number, Book[]> {
    return new DataLoader<number, Book[]>(async (keys) => {
      return await this.author_repo.findWrittenBooks(keys);
    });
  }
}
