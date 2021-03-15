import { Query, Resolver } from '@nestjs/graphql';
import { ConnectionReturn } from './connection.model';

@Resolver()
export class ConnectionResolver {
  @Query(() => ConnectionReturn)
  checkConnection(): ConnectionReturn {
    return {
      connection: true,
      prefix: 'path to /api/graphql has been connected!!!!',
    };
  }
}
