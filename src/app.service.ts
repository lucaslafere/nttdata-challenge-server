import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getMovie(title: string) {
    return this.httpService.get(
      `
      http://www.omdbapi.com/?i=tt3896198&apikey=613ca247&t=${title}`,
    );
  }
}
