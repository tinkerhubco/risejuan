import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';

import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './create-campaign.dto';
import { PostCampaignUpdateDto } from './post-campaign-update.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.create(createCampaignDto);
  }

  @Get()
  public getCampaigns() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  public getCampaign(@Param('id') id: string) {
    return this.campaignService.findOne(id);
  }

  @Post(':id/updates')
  @UsePipes(new ValidationPipe({ transform: true }))
  public postCampaignUpdate(
    @Param('id') id: string,
    @Body() postCampaignUpdateDto: PostCampaignUpdateDto,
  ) {
    return this.campaignService.postCampaignUpdate(id, postCampaignUpdateDto);
  }
}
