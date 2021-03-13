import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookPurchase } from './book-purchase.entity';
import { BookPurchaseResolver } from './book-purchase.resolver';
import { BookPurchaseService } from './book-purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookPurchase])],
  providers: [BookPurchaseResolver, BookPurchaseService],
  exports: [TypeOrmModule],
})
export class BookPurchaseModule {}
