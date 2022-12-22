import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CinemaShowEntity } from 'src/cinema.show/cinema.show.entity';
import { SeatBlockEntity } from './seat.block.entity';

@Entity()
export class HallEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  seatWidth: number;

  @OneToMany(() => SeatBlockEntity, (block) => block.hall)
  seatBlocks: [];

  @OneToMany(() => CinemaShowEntity, (cinema) => cinema.hall)
  cinemaShows: CinemaShowEntity[];
}
