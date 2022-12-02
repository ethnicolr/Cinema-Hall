import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/:id')
  async findOne(@Param() param) {
    return await this.movieService.findOne(param.id);
  }
}
