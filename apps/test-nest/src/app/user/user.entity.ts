import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookPurchase } from '../book-purchase/book-purchase.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @HideField()
  @Column()
  password: string;

  @Column()
  name: string;

  @Field(() => [BookPurchase])
  @OneToMany(() => BookPurchase, (purchase) => purchase.user)
  purchased: BookPurchase[];
}
