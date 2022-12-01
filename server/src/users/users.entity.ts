import { Ticket } from 'src/ticket/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Ticket, (ticket) => ticket.user)
  tickets: Ticket[];
}
