import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './movie/movie.controller';

@Module({
  imports: [],
  controllers: [AppController, MovieController],
  providers: [AppService],
})
export class AppModule {}
