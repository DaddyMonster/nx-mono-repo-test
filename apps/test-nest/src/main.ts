import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { appSession } from './lib/session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX);
  app.use(appSession);
  const port = process.env.PORT;
  await app.listen(port, () => {
    Logger.log(
      'Listening at http://localhost:' + port + '/' + process.env.GLOBAL_PREFIX
    );
  });
}

bootstrap();
