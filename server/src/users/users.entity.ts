import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TicketsEntity } from 'src/tickets/tickets.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => TicketsEntity, (ticket) => ticket.user)
  tickets: TicketsEntity[];
}
