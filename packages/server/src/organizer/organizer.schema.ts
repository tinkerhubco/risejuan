import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Organizer extends Document {
  @Prop()
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  givenName: string;

  @Prop()
  familyName: string;

  @Prop()
  nickname: string;

  @Prop({ required: true })
  picture: string;

  @Prop()
  locale: string;

  @Prop()
  sub: string;

  @Prop()
  emailVerified: boolean;

  @Prop()
  updatedAt: Date;
}

export const OrganizerSchema = SchemaFactory.createForClass(Organizer);
