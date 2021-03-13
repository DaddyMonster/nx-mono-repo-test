import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field(() => ID)
  username: string;

  password: string;
}
