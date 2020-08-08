import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Type } from 'class-transformer';

import { Organizer } from '../organizer/organizer.schema';
import { Attachment } from '../schemas/attachment.schema';
import { CampaignUpdate } from '../schemas/campaign-update.schema';
import { Donor } from '../schemas/donor.schema';
import { CampaignStatus } from '../constants/campaign-status';

@Schema()
export class Campaign extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  address: string;

  @Prop({ required: true })
  organizer: Organizer;

  @Prop([SchemaTypes.String])
  tags: string[];

  @Prop([Donor])
  donors: Donor[];

  @Prop()
  targetFund: number;

  @Prop()
  targetDate: Date;

  @Prop()
  currentFund: number;

  @Prop()
  numberOfEstimatedDonors: number;

  @Prop({
    default: CampaignStatus.Pending,
  })
  status: CampaignStatus;

  @Prop([Attachment])
  @Type(() => Attachment)
  attachments: Attachment[];

  @Prop([CampaignUpdate])
  updates: CampaignUpdate[];

  @Prop({
    default: false,
  })
  isDeleted: boolean;

  @Prop({
    default: new Date(),
  })
  createdDate: Date;

  @Prop()
  updatedAt: Date;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
