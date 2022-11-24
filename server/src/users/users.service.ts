import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create.dto';
import { UserEntity } from './users.entity';

export type User = {
  id: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  async findOne(email: string): Promise<User | undefined> {
    return await this.userRepo.findOne({ where: { email } });
  }

  async create(createDto: CreateDto): Promise<any> {
    const { email, password } = createDto;
    const isExist = await this.userRepo.findOne({ where: { email } });
    if (isExist) {
      throw new HttpException('Email already is use', HttpStatus.BAD_REQUEST);
    }
    const user = this.userRepo.create({ email, password });
    await this.userRepo.save(user);
    return user;
  }

  // async findByEmail({ email, password }: LoginUserDto) {
  //   const user = await this.userRepo.findOne({ where: { email } });
  //   if (!user) {
  //     throw new HttpException('Account not found', HttpStatus.UNAUTHORIZED);
  //   }
  //   if (user.password !== password) {
  //     throw new HttpException('Invalid  password', HttpStatus.UNAUTHORIZED);
  //   }
  //   return user;
  // }
}
