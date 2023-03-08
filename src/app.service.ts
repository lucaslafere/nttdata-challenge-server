import { HttpService } from '@nestjs/axios/dist';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private httpService: HttpService) {}
  async getMovie(title: string) {
    try {
      let { data } = await this.httpService.axiosRef.get(
        `
      http://www.omdbapi.com/?i=tt3896198&apikey=613ca247&t=${title}&plot=full`,
      );
      let smallPlotData = await this.httpService.axiosRef.get(
        `
      http://www.omdbapi.com/?i=tt3896198&apikey=613ca247&t=${title}&plot=short`,
      );
      // this apy key should be in a .env file, but for the purpose of the challenge, I'm leaving it here

      let review = (data.imdbRating = Math.round(Number(data.imdbRating) / 2));
      let preparedData = {
        title: data.Title,
        actors: data.Actors,
        poster: data.Poster,
        plot: data.Plot,
        smallPlot: smallPlotData.data.Plot,
        review: review,
      };
      return preparedData;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
