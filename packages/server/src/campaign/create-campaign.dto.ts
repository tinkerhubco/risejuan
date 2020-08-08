import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsEmail,
  ValidateNested,
  IsUrl,
  IsArray,
  ArrayNotEmpty,
  IsNumber,
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateCampaignOrganizerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  givenName: string;

  familyName: string;

  nickname: string;

  @IsNotEmpty()
  @IsUrl()
  picture: string;

  locale: string;

  sub: string;

  emailVerified: boolean;
}

class CreateCampaignAttachmentDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;
}

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmptyObject()
  @ValidateNested()
  // We need this to make sure class-validator works
  // https://github.com/typestack/class-validator/issues/306
  @Type(() => CreateCampaignOrganizerDto)
  organizer: CreateCampaignOrganizerDto;

  @IsOptional()
  tags: string[];

  @IsNotEmpty()
  @IsNumber()
  targetFund: number;

  @IsNotEmpty()
  @IsDateString()
  targetDate: Date;

  @IsNotEmpty()
  @IsNumber()
  numberOfEstimatedDonors: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested()
  @Type(() => CreateCampaignAttachmentDto)
  attachments: CreateCampaignAttachmentDto[];
}
