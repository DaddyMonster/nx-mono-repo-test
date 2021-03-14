import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ConnectionReturn {
  connection: boolean;
  prefix: string;
}
