import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CinemaShowEntity } from 'src/cinema.show/cinema.show.entity';
import { UserEntity } from 'src/users/users.entity';

@Entity()
export class TicketsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  row: number;

  @Column()
  chair: number;

  @ManyToOne(() => CinemaShowEntity, (cinemaShows) => cinemaShows.tickets)
  cinemaShow: CinemaShowEntity;

  @ManyToOne(() => UserEntity, (user) => user.tickets)
  user: UserEntity;
}
