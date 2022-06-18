import { Model } from 'mongoose';
import { IMovie } from './interfaces/movie.interface';
import { MovieDocument } from './schemas/movie.schema';
export declare class MovieService {
    private movieModel;
    private readonly movies;
    constructor(movieModel: Model<MovieDocument>);
    create(movie: IMovie): void;
    findAll(): IMovie[];
}
