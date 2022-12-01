import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaShowController } from './cinema.show.controller';
import { CinemaShow } from './cinema.show.entity';
import { CinemaShowService } from './cinema.show.service';

@Module({
  imports: [TypeOrmModule.forFeature([CinemaShow])],
  controllers: [CinemaShowController],
  providers: [CinemaShowService],
  exports: [TypeOrmModule],
})
export class CinemaShowModule {}
