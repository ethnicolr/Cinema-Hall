import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hall } from './cinema.hall.entity';

@Entity()
export class SeatBlock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  x: number;
  @Column()
  y: number;
  @Column()
  width: number;
  @Column()
  height: number;
  @Column()
  seats: number;
  @Column()
  rows: number;

  @ManyToOne(() => Hall, (hall) => hall.seatBlocks)
  hall: Hall;
}
