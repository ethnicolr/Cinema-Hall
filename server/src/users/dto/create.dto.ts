import { IsNotEmpty } from 'class-validator';

export class CreateDto {
  @IsNotEmpty() email: string;
  @IsNotEmpty() password: string;
}
