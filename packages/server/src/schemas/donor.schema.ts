import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Donor extends Document {
  @Prop()
  amount: number;

  @Prop()
  name: string;

  @Prop({
    default: false,
  })
  isAnonymous: boolean;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdDate: Date;
}

export const DonorSchema = SchemaFactory.createForClass(Donor);
