import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Campaign, CampaignSchema } from './campaign.schema';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { CampaignUpdate, CampaignUpdateSchema } from '../schemas/campaign-update.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Campaign.name, schema: CampaignSchema },
      { name: CampaignUpdate.name, schema: CampaignUpdateSchema }
    ]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
