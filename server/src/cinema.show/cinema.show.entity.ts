import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hall } from 'src/cinema.hall/cinema.hall.entity';
import { Movie } from 'src/movie/movie.entity';
import { Ticket } from 'src/ticket/ticket.entity';

@Entity()
export class CinemaShow {
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

  @ManyToOne(() => Movie, (movie) => movie.cinemaShows)
  movie: Movie;

  @ManyToOne(() => Hall, (hall) => hall.cinemaShows)
  hall: Hall;

  @OneToMany(() => Ticket, (ticket) => ticket.cinemaShow)
  tickets: Ticket[];
}
