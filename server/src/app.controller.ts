import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/strategy/jwt-auth.guard';
import { LocalAuthGuard } from './auth/strategy/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  // constructor(
  //   // private readonly appService: AppService,
  //   // private authService: AuthService,
  //   // private usersService: UsersService,
  // ) {}
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  // @Post('auth/register')
  // async register(@Request() req) {
  //   this.usersService.create(req);
  // }
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
