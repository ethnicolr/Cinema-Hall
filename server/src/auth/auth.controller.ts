import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './strategy/jwt-auth.guard';
import { LocalAuthGuard } from './strategy/local-auth.guard';

@Controller()
export class AuthController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('auth/login')
  async login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @Post('auth/register')
  async register(@Body() registerDto: RegisterDto) {
    const result = await this.authService.register(registerDto);
    if (!result.success) {
      throw new HttpException(result, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
