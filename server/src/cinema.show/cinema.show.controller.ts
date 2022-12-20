import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';
import { CinemaShowService } from './cinema.show.service';
import { CinemaQueryParamDto } from './dto/cinema.query.params.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

@Controller('cinemaShows')
export class CinemaShowController {
  constructor(private readonly cinemaService: CinemaShowService) {}

  @Get()
  async getCinemaShows(@Query() params: CinemaQueryParamDto) {
    return await this.cinemaService.filtetCinemaShow(params);
  }

  @Get('/:id')
  async findOne(@Param() param) {
    return await this.cinemaService.findOne(param.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:id/tickets')
  async buyTickets(
    @Req() req,
    @Param() params,
    @Body() tickets: { chair: number; row: number }[],
  ) {
    const { userId } = req.user;
    console.log(req.user);
  }
}
