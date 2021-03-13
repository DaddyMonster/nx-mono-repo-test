import { InputType, PickType } from '@nestjs/graphql';
import { Author } from '../author.entity';

@InputType()
export class CreateAuthorDTO extends PickType(
  Author,
  ['name', 'age', 'homepage'],
  InputType
) {}
