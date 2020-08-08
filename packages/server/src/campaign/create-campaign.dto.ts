import { IsNotEmpty } from 'class-validator';
import { Organizer } from '../organizer/organizer.schema';

export class CreateCampaignDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  address: string;

  // TODO
  @IsNotEmpty()
  organizer: Organizer;

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
