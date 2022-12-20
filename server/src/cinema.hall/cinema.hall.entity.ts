import { CinemaShowEntity } from 'src/cinema.show/cinema.show.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(() => CinemaShowEntity, (cinema) => cinema.hall)
  cinemaShows: CinemaShowEntity[];
}
