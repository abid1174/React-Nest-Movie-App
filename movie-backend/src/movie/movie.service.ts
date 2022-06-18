import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IMovie } from './interfaces/movie.interface';
import { MovieDocument, Movie } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<any> {
    const { name, category, duration, link, image } = createMovieDto;
    const movie = new this.movieModel({
      name,
      category,
      duration,
      link,
      image,
    });

    try {
      await movie.save();
    } catch (error) {
      throw new Error();
    }
  }
}
