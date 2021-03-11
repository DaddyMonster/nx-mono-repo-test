import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  name: string;

  @Field()
  authror: string; // TEMP
}
