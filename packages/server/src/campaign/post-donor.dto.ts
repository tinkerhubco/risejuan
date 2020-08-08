import { IsNumber, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PostDonorDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  isAnonymous: boolean;
}
