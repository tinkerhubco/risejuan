import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attachment extends Document {
  @Prop()
  url: string;

  @Prop({
    default: new Date(),
  })
  createdDate: Date;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);
