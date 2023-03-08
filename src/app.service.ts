import { HttpService } from '@nestjs/axios/dist';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private httpService: HttpService) {}
  async getMovie(title: string) {
    try {
      let { data } = await this.httpService.axiosRef.get(
        `
      http://www.omdbapi.com/?i=tt3896198&apikey=613ca247&t=${title}`,
      );
      return data;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
