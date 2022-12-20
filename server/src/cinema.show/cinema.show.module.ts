import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from 'src/users/users.entity';
import { CinemaShowEntity } from './cinema.show.entity';
import { CinemaShowService } from './cinema.show.service';
import { CinemaShowController } from './cinema.show.controller';
// import { TicketsEntity } from 'src/tickets/tickets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CinemaShowEntity, UserEntity])],
  controllers: [CinemaShowController],
  providers: [CinemaShowService],
  exports: [TypeOrmModule],
})
export class CinemaShowModule {}
