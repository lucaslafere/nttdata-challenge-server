import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Movie } from './types/movie';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('movies/:title')
  getMovie(@Param() params): Promise<Movie> {
    return this.appService.getMovie(params.title);
  }
}
