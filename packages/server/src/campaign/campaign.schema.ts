import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class Campaign extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  address: string;

  // TODO - Auth0
  @Prop()
  organizer: string;

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
  @Prop([SchemaTypes.String])
  attachments: string[];

  // TODO - Array of updates
  @Prop([SchemaTypes.String])
  updates: string[];

  @Prop()
  isDeleted: boolean;

  @Prop()
  createdDate: Date;

  @Prop()
  updatedAt: Date;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
