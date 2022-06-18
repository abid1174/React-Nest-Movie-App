import { Movie } from 'src/movie/schemas/movie.schema';

export interface IUser {
  name: string;
  email: string;
  password: string;
  movies?: Movie[];
}
