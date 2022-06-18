import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieService } from './movie.service';
export declare class MovieController {
    private movieService;
    constructor(movieService: MovieService);
    findAll(query: any): import("./interfaces/movie.interface").IMovie[];
    create(createMovieDto: CreateMovieDto): Promise<void>;
    findOne(id: string): string;
    update(id: string, updateMovieDto: UpdateMovieDto): string;
    remove(id: string): string;
}
