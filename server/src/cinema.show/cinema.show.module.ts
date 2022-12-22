import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from 'src/users/users.entity';
import { CinemaShowEntity } from './cinema.show.entity';
import { CinemaShowService } from './cinema.show.service';
import { CinemaShowController } from './cinema.show.controller';
import { TicketsModule } from 'src/tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CinemaShowEntity, UserEntity]),
    TicketsModule,
  ],
  controllers: [CinemaShowController],
  providers: [CinemaShowService],
  exports: [TypeOrmModule],
})
export class CinemaShowModule {}
