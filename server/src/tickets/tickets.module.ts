import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsEntity } from './tickets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketsEntity])],
  exports: [TypeOrmModule],
})
export class TicketsModule {}
