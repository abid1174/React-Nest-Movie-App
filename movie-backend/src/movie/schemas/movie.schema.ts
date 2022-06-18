import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  duration: number;

  @Prop()
  image: string;

  @Prop()
  link: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  addedBy: User;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
