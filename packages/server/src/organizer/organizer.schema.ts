import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Organizer extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  givenName: string;

  @Prop()
  familyName: string;

  @Prop()
  nickname: string;

  @Prop()
  picture: string;

  @Prop()
  locale: string;

  @Prop()
  emailVerified: boolean;

  @Prop()
  updatedAt: Date;
}

export const OrganizerSchema = SchemaFactory.createForClass(Organizer);
