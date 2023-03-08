import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  async getMovie(title: string) {
    let { data } = await this.httpService.axiosRef.get(
      `
      http://www.omdbapi.com/?i=tt3896198&apikey=613ca247&t=${title}`,
    );
    return data;
  }
}
