import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CinemaShowEntity } from 'src/cinema.show/cinema.show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(CinemaShowEntity)
    private readonly cinemaShowRepo: Repository<CinemaShowEntity>,
  ) {}

  async findTicketsByProfile(userId: number) {
    const tickets = await this.cinemaShowRepo.find({
      relations: {
        movie: true,
        tickets: true,
      },
      where: {
        tickets: {
          user: {
            id: userId,
          },
        },
      },
    });

    return tickets;
  }
}
