import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataLoaderInterceptor } from 'nestjs-dataloader';
import { Book } from '../book/book.entity';
import { Author } from './author.entity';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { WrittenBookLoader } from './loader/writtenbook.loader';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  providers: [
    AuthorService,
    AuthorResolver,
    WrittenBookLoader,
    { provide: APP_INTERCEPTOR, useClass: DataLoaderInterceptor },
  ],
  exports: [TypeOrmModule],
})
export class AuthorModule {}
