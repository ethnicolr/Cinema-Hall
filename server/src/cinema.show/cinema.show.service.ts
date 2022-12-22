import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Between, Raw, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CinemaShowEntity } from './cinema.show.entity';
import { UserEntity } from 'src/users/users.entity';
import { CinemaQueryParamDto } from './dto/cinema.query.params.dto';
import { BuyTicketDto } from './dto/cinema.buy.tickets.dto';
import { TicketsEntity } from 'src/tickets/tickets.entity';

@Injectable()
export class CinemaShowService {
  constructor(
    @InjectRepository(CinemaShowEntity)
    private readonly cinemaShowRepo: Repository<CinemaShowEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(TicketsEntity)
    private readonly ticketsRepo: Repository<TicketsEntity>,
  ) {}

  async findOne(id: string | number) {
    const cinemaShow = await this.cinemaShowRepo.findOne({
      where: { id: Number(id) },
      relations: ['hall', 'hall.seatBlocks', 'tickets'],
    });
    if (!cinemaShow) {
      throw new HttpException('Cinema show not fount', HttpStatus.NOT_FOUND);
    }
    return cinemaShow;
  }

  async filtetCinemaShow(filter: CinemaQueryParamDto) {
    const where = {};
    Object.keys(filter).forEach((key) => {
      const value = filter[key];
      if (key !== 'date') {
        where[key] = Raw((alias) => `${alias} IN (:...${key})`, {
          [key]: value.split(',').map((v) => v.toUpperCase()),
        });
      } else {
        const from = new Date();
        const to = new Date();
        const timeZoneOffse = new Date().getTimezoneOffset() / 60;
        from.setHours(0 - timeZoneOffse, 0, 0, 0);
        to.setHours(0 - timeZoneOffse, 0, 0, 0);

        switch (value.toUpperCase()) {
          case 'TODAY':
            to.setHours(24 - timeZoneOffse, 0, 0, 0);
            break;
          case 'TOMORROW':
            from.setDate(to.getDate() + 1);
            to.setDate(to.getDate() + 2);
            break;
          case 'WEEK':
            to.setDate(to.getDate() + 7);
            break;
          case 'MONTH':
            to.setMonth(to.getMonth() + 1);
            break;
          default:
            break;
        }
        where['startTime'] = Between(from.toISOString(), to.toISOString());
      }
    });
    const shows = await this.cinemaShowRepo.find({
      relations: ['movie'],
      where,
    });
    return shows;
  }

  async butTickets(buyTicketsDto: BuyTicketDto) {
    const { userId, cinemaShowId, tickets } = buyTicketsDto;

    const user = await this.userRepo.findOne({ where: { id: userId } });
    const cinemaShow = await this.cinemaShowRepo.findOne({
      where: { id: cinemaShowId },
    });

    const isSold = await this.ticketsRepo.findOne({
      relations: { cinemaShow: true },
      where: tickets.reduce((acc, ticket) => {
        const { row, chair } = ticket;
        acc.push({ cinemaShow, row, chair });
        return acc;
      }, []),
    });

    if (isSold) {
      return { success: false, message: 'Билеты уже куплены' };
    }

    const newTickets = tickets.map((ticket) =>
      this.ticketsRepo.create({ ...ticket, user, cinemaShow }),
    );
    this.ticketsRepo.save(newTickets);

    return { success: true, message: 'Билеты куплены' };
  }
}
