import { InputType, PickType } from '@nestjs/graphql';
import { Book } from '../book.entity';

@InputType()
export class CreateBookInput extends PickType(
  Book,
  ['price', 'title', 'authorId'],
  InputType
) {}
