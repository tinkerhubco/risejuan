import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ConfigUtil from './utils/config.util';
import { CampaignModule } from './campaign/campaign.module';

const databaseUrlPlaceholder = String(ConfigUtil.get('database.url'));
const databasePassword = ConfigUtil.get('database.password');
const databaseName = ConfigUtil.get('database.name');
const mongoAtlasUrl = databaseUrlPlaceholder
  .replace('<password>', databasePassword)
  .replace('<dbname>', databaseName);
@Module({
  imports: [MongooseModule.forRoot(mongoAtlasUrl), CampaignModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
