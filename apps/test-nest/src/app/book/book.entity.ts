import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Author } from '../author/author.entity';
import { BookPurchase } from '../book-purchase/book-purchase.entity';

@ObjectType()
@Entity()
export class Book {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Field(() => Float)
  @Column()
  price: number;

  @Field(() => Author)
  @ManyToOne(() => Author, (author) => author.writtenBooks)
  author: Author;

  @Field(() => ID)
  @Column()
  @RelationId((book: Book) => book.author)
  authorId: number;

  @Field(() => [BookPurchase])
  @OneToMany(() => BookPurchase, (purchase) => purchase.book)
  purchase: BookPurchase[];
}
