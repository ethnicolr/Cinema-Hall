import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RegistrationStatus } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new HttpException('Account not found', HttpStatus.UNAUTHORIZED);
    }
    if (user.password !== password) {
      throw new HttpException('Invalid  password', HttpStatus.UNAUTHORIZED);
    }
    const payload = { email: user.email, sub: user.id };

    return {
      success: true,
      email,
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }
  async register(userDto: RegisterDto): Promise<RegistrationStatus> {
    let status = {
      success: true,
      message: 'account registered',
    };
    try {
      await this.usersService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err.message,
      };
    }
    return status;
  }
}
