import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Type } from 'class-transformer';

import { Organizer } from '../organizer/organizer.schema';
import { Attachment } from '../schemas/attachment.schema';
import { CampaignUpdate } from '../schemas/campaign-update.schema';
import { Donor } from '../schemas/donor.schema';

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

  // TODO - array of transactions from paypal
  @Prop([Donor])
  donors: Donor[];

  @Prop()
  targetFund: number;

  @Prop()
  targetDate: Date;

  @Prop({
    default: 0,
  })
  currentFund: number;

  @Prop()
  numberOfEstimatedDonors: number;

  // TOOD - enum
  @Prop()
  status: string;

  @Prop([Attachment])
  @Type(() => Attachment)
  attachments: Attachment[];

  // TODO - Array of updates
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
