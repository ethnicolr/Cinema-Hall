import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaShowEntity } from 'src/cinema.show/cinema.show.entity';
import { TicketsController } from './tickets.controller';
import { TicketsEntity } from './tickets.entity';
import { TicketsService } from './tickets.service';

@Module({
  imports: [TypeOrmModule.forFeature([TicketsEntity, CinemaShowEntity])],
  providers: [TicketsService],
  controllers: [TicketsController],
  exports: [TypeOrmModule],
})
export class TicketsModule {}
