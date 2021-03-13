import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Book } from '../book/book.entity';

@ObjectType()
@Entity()
export class Author {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  age?: number;

  @Column()
  homepage: string;

  @Field(() => [Book])
  @OneToMany(() => Book, (book) => book.author)
  writtenBooks: Book[];

  @Field(() => [ID])
  @RelationId((author: Author) => author.writtenBooks)
  writtenBookIds: number[];
}
