import { Controller, Get } from '@nestjs/common';
import { CinemaShowService } from './cinema.show.service';

@Controller('cinemaShows')
export class CinemaShowController {
  constructor(private readonly cinemaService: CinemaShowService) {}

  @Get()
  async getCinemaShows(): Promise<any> {
    // return 'true';
    return await this.cinemaService.filtetCinemaShow('test');
  }
}
