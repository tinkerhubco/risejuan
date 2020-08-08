import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Donor extends Document {
  @Prop()
  amount: number;

  @Prop()
  name: string;

  @Prop()
  isAnonymous: boolean;

  @Prop({
    default: new Date(),
  })
  createdDate: Date;
}

export const DonorSchema = SchemaFactory.createForClass(Donor);
