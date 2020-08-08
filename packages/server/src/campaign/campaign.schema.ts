import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Organizer } from '../organizer/organizer.schema';
import { Attachment } from '../schemas/attachment.schema';
import { CampaignUpdate } from '../schemas/campaign-update.schema';

@Schema()
export class Campaign extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  address: string;

  // TODO - Auth0
  @Prop({ required: true })
  organizer: Organizer

  @Prop([SchemaTypes.String])
  tags: string[];

  // TODO - array of transactions from paypal
  @Prop([SchemaTypes.String])
  donors: string[];

  @Prop()
  targetFund: number;

  @Prop()
  targetDate: Date;

  @Prop()
  currentFund: number;

  @Prop()
  numberOfEstimatedDonors: number;

  // TOOD - enum
  @Prop()
  status: string;

  // TODO - Array of media urls
  @Prop([Attachment])
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
