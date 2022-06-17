import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from '../movie/movie.controller';
import { AuthController } from '../auth/auth.controller';
import { MovieModule } from 'src/movie/movie.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/movie-app'),
    MovieModule,
  ],
  controllers: [AppController, MovieController, AuthController],
  providers: [AppService],
})
export class AppModule {}
