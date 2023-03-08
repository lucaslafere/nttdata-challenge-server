import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('movie/:title')
  getMovie(@Param() params): string {
    return 'Title: ' + params.title;
  }
}
