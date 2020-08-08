import {
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { MINIMUM_AMOUNT_TO_DONATE } from '../constants/app';

export class PostDonorDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(MINIMUM_AMOUNT_TO_DONATE)
  amount: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  isAnonymous: boolean;
}
