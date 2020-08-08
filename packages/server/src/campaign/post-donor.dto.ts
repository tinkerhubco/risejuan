import { IsNumber, IsNotEmpty } from 'class-validator';

export class PostDonorDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  name: string;

  @IsNotEmpty()
  isAnonymous: boolean;
}
