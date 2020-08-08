import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import ConfigUtil from './utils/config.util';

const databaseUrlPlaceholder = String(ConfigUtil.get('database.url'));
const databasePassword = ConfigUtil.get('database.password');
const databaseName = ConfigUtil.get('database.name');
const mongoAtlasUrl = databaseUrlPlaceholder
  .replace('<password>', databasePassword)
  .replace('<dbname>', databaseName);
@Module({
  imports: [MongooseModule.forRoot(mongoAtlasUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
