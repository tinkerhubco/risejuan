import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attachment extends Document {
  @Prop()
  type: string;

  @Prop()
  url: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdDate: Date;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);
