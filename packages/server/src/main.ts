import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';

import ConfigUtil from './utils/config.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = ConfigUtil.get('api.port');

  configureApp(app);

  await app.listen(port);
}

export function configureApp(app: INestApplication) {
  app.setGlobalPrefix(ConfigUtil.get('api.prefix'));
  app.enableCors();
}

bootstrap();
