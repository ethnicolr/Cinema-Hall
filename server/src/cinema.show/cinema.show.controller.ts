import { Controller, Get, Query } from '@nestjs/common';
import { CinemaShowService } from './cinema.show.service';
import { CinemaQueryParamDto } from './dto/cinema.query.params.dto';

@Controller('cinemaShows')
export class CinemaShowController {
  constructor(private readonly cinemaService: CinemaShowService) {}

  @Get()
  async getCinemaShows(@Query() params: CinemaQueryParamDto) {
    return await this.cinemaService.filtetCinemaShow(params);
  }
}
