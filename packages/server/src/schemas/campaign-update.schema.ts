import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Attachment } from './attachment.schema';

@Schema()
export class CampaignUpdate extends Document {
  @Prop([Attachment])
  attachment: Attachment;

  @Prop()
  description: string;
}

export const CampaignUpdateSchema = SchemaFactory.createForClass(
  CampaignUpdate,
);
