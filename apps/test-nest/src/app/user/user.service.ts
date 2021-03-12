import { Injectable /* Session */ } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRequest } from '../../typed/ctx';
import { CreateUserInput } from './dto/create-user.input';
import { LoginInput } from './dto/login.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private user_repo: Repository<User>) {}

  async getUsers(): Promise<User[]> {
    return this.user_repo.find();
  }

  async getUserById(userId: number): Promise<User> {
    return this.user_repo.findOneOrFail({ where: { id: userId } });
  }

  async createUser(input: CreateUserInput): Promise<User> {
    return this.user_repo.save(input);
  }

  async loginUser(
    { password, username }: LoginInput,
    req: IRequest
  ): Promise<User> {
    const exist = await this.user_repo.findOne({
      where: { username, password },
    });
    // NOT REAL AUTH... NOT PASSING PASSWORD!

    if (exist) {
      req.session.isLogged = true;
      req.session.userId = exist.id;

      console.log(req.session.isLogged, req.session.userId);

      return exist;
    }

    throw new Error();
  }
}
