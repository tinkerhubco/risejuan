import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class PostCampaignUpdateAttachmentDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;
}

export class PostCampaignUpdateDto {
  @IsNotEmptyObject()
  @ValidateNested()
  // We need this to make sure class-validator works
  // https://github.com/typestack/class-validator/issues/306
  @Type(() => PostCampaignUpdateAttachmentDto)
  attachment: PostCampaignUpdateAttachmentDto;

  @IsNotEmpty()
  description: string;
}
