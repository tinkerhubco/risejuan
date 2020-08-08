import { IsNotEmpty } from 'class-validator';

export class CreateCampaignDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  address: string;

  // TODO
  @IsNotEmpty()
  organizer: string;

  tags: string[];

  @IsNotEmpty()
  targetFund: number;

  @IsNotEmpty()
  targetDate: Date;

  @IsNotEmpty()
  numberOfEstimatedDonors: number;

  @IsNotEmpty()
  attachments: string[];
}
