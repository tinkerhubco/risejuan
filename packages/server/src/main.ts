import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';

import ConfigUtil from './utils/config.util';
import { readFileSync } from 'fs';

async function bootstrap() {
  const httpsOptions = getHttpsOptions();
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  const port = ConfigUtil.get('api.port');

  configureApp(app);

  await app.listen(port);
}

function getHttpsOptions() {
  const privateKeyPath = process.env.HTTPS_PRIVATE_KEY_PATH;
  const certPath = process.env.HTTPS_CERT_PATH;

  if (!privateKeyPath || !certPath) {
    return;
  }

  return {
    key: readFileSync(privateKeyPath),
    cert: readFileSync(certPath),
  };
}

export function configureApp(app: INestApplication) {
  app.setGlobalPrefix(ConfigUtil.get('api.prefix'));
  app.enableCors();
}

bootstrap();
