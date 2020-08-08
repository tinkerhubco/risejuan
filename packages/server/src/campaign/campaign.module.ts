import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Campaign, CampaignSchema } from './campaign.schema';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import {
  CampaignUpdate,
  CampaignUpdateSchema,
} from '../schemas/campaign-update.schema';
import { Attachment, AttachmentSchema } from '../schemas/attachment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Campaign.name, schema: CampaignSchema },
      { name: CampaignUpdate.name, schema: CampaignUpdateSchema },
      { name: Attachment.name, schema: AttachmentSchema },
    ]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
  exports: [CampaignService],
})
export class CampaignModule {}
