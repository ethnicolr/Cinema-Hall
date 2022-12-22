import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HallEntity } from './cinema.hall.entity';

@Entity()
export class SeatBlockEntity {
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

  @ManyToOne(() => HallEntity, (hall) => hall.seatBlocks)
  hall: HallEntity;
}
