import { Args, Context, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ctx } from '../../typed/ctx';

import { CreateUserInput } from './dto/create-user.input';
import { LoginInput } from './dto/login.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private user_srv: UserService) {}

  @Query(() => User)
  async getUserById(@Args('userId', { type: () => ID }) userId: number) {
    return this.user_srv.getUserById(userId);
  }

  @Query(() => User)
  async me(@Context() { req }: Ctx) {
    console.log(req.session.isLogged, req.session.userId);
    return this.user_srv.getUserById(req.session.userId);
  }

  @Mutation(() => User)
  async registerUser(@Args('input') input: CreateUserInput) {
    return this.user_srv.createUser(input);
  }

  @Mutation(() => User)
  async loginUser(@Args('input') input: LoginInput, @Context() { req }: Ctx) {
    return this.user_srv.loginUser(input, req);
  }
}
