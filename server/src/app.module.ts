import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CinemaShowService } from './cinema.show/cinema.show.service';
import { CinemaShowModule } from './cinema.show/cinema.show.module';
import { MovieService } from './movie/movie.service';
import { ModuleService } from './module/module.service';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, CinemaShowModule],
  controllers: [AuthController],
  providers: [AppService, CinemaShowService, MovieService, ModuleService],
})
export class AppModule {}
