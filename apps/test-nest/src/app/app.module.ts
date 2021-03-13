import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { BookPurchaseModule } from './book-purchase/book-purchase.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),

    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/test-nest/src/schmea.gql'),
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    UserModule,
    BookModule,
    AuthorModule,
    BookPurchaseModule,
  ],
})
export class AppModule {}
