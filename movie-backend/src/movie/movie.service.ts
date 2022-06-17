import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IMovie } from './interfaces/movie.interface';
import { MovieDocument, Movie } from './schemas/movie.schema';

@Injectable()
export class MovieService {
  private readonly movies: IMovie[] = [];

  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  create(movie: IMovie) {
    this.movies.push(movie);
  }

  findAll(): IMovie[] {
    return this.movies;
  }
}
