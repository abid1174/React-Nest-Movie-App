import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Movie } from 'src/movie/schemas/movie.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
  movies: Movie[];
}

export const UserSchema = SchemaFactory.createForClass(User);
