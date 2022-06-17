import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  name: string;

  @Prop()
  genre: string;

  @Prop()
  duration: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
