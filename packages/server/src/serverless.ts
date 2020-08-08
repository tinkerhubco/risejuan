import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

import ConfigUtil from './utils/config.util';

import { AppModule } from './app.module';
import { from } from 'rxjs';

// https://github.com/nestjs/docs.nestjs.com/issues/96#issuecomment-540432066
async function bootstrap() {
  const server = express();
  const adapter = new ExpressAdapter(server);
  const app = await NestFactory.create(AppModule, adapter);

  configureApp(app);

  await app.init();

  return server;
}

export function configureApp(app: INestApplication) {
  app.setGlobalPrefix(ConfigUtil.get('api.prefix'));
  app.enableCors();
}

// Observable for cold start
const server = from(bootstrap());

export default async function serverless(req, res) {
  const handler = await server.toPromise();

  return handler(req, res);
}
