import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CinemaShow } from './cinema.show.entity';

@Injectable()
export class CinemaShowService {
  constructor(
    @InjectRepository(CinemaShow)
    private readonly cinemaShowRepo: Repository<CinemaShow>,
  ) {}

  async filtetCinemaShow(filter: any) {
    const shows = await this.cinemaShowRepo.find();
    console.log(shows);
    return 'true';
  }
}
