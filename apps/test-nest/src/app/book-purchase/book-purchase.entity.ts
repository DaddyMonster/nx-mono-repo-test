import { forwardRef, Inject } from '@nestjs/common';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Book } from '../book/book.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class BookPurchase {
  constructor(
    @Inject(forwardRef(() => Book)) private Book: Book,
    @Inject(forwardRef(() => User)) private User: User
  ) {}

  @Field(() => ID)
  @PrimaryColumn()
  userId: number;

  @Field(() => ID)
  @PrimaryColumn()
  bookId: number;

  @Field(() => User)
  user: User;

  @Field(() => Book)
  @ManyToOne(() => Book, (book) => book.purchase)
  book: Book;

  @Field(() => Float)
  @Column()
  paid: number;
}
