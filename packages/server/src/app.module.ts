import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ConfigUtil from './utils/config.util';
import { CampaignModule } from './campaign/campaign.module';

const databaseUrlPlaceholder = String(ConfigUtil.get('database.url'));
const databasePassword = ConfigUtil.get('database.password');
const databaseName = ConfigUtil.get('database.name');
const databaseUrl = databaseUrlPlaceholder
  .replace('<password>', databasePassword)
  .replace('<dbname>', databaseName);

console.log('database url - ', databaseUrl);
@Module({
  imports: [MongooseModule.forRoot(databaseUrl), CampaignModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
