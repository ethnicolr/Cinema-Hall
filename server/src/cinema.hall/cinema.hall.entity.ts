import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CinemaShow } from 'src/cinema.show/cinema.show.entity';
import { SeatBlock } from './seat.block.entity';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  seatWidth: number;

  @OneToMany(() => SeatBlock, (block) => block.hall)
  seatBlocks: [];

  @OneToMany(() => CinemaShow, (cinema) => cinema.hall)
  cinemaShows: CinemaShow[];
}
