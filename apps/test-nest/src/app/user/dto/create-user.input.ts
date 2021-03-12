import { Field, InputType, PickType } from '@nestjs/graphql';
import { User } from '../user.entity';

@InputType()
export class CreateUserInput extends PickType(
  User,
  ['name', 'username'],
  InputType
) {
  @Field()
  password: string;
}
