import { CinemaShow } from 'src/cinema.show/cinema.show.entity';
import { UserEntity } from 'src/users/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  row: number;

  @Column()
  chair: number;

  @ManyToOne(() => CinemaShow, (cinemaShows) => cinemaShows.tickets)
  cinemaShow: CinemaShow;

  @ManyToOne(() => UserEntity, (user) => user.tickets)
  user: UserEntity;
}
