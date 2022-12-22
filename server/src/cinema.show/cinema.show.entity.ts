import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MovieEntity } from 'src/movie/movie.entity';
import { TicketsEntity } from 'src/tickets/tickets.entity';
import { HallEntity } from 'src/cinema.hall/cinema.hall.entity';

@Entity()
export class CinemaShowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  technology: string;

  @Column()
  format: string;

  @Column()
  price: number;

  @Column({ type: 'timestamp' })
  startTime: string;

  @ManyToOne(() => MovieEntity, (movie) => movie.cinemaShows)
  movie: MovieEntity;

  @ManyToOne(() => HallEntity, (hall) => hall.cinemaShows)
  hall: HallEntity;

  @OneToMany(() => TicketsEntity, (ticket) => ticket.cinemaShow)
  tickets: TicketsEntity[];
}
