import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';

import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './create-campaign.dto';
import { PostCampaignUpdateDto } from './post-campaign-update.dto';
import { PostDonorDto } from './post-donor.dto';

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

  @Post(':id/donors')
  @UsePipes(new ValidationPipe({ transform: true }))
  public postDonor(
    @Param('id') id: string,
    @Body() postDonorDto: PostDonorDto,
  ) {
    return this.campaignService.postDonor(id, postDonorDto);
  }

  @Put(':id/cancel')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async cancelCampaign(@Param('id') id: string) {
    return this.campaignService.cancelCampaign(id);
  }

  @Put(':id/complete')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async completeCampaign(@Param('id') id: string) {
    return this.campaignService.completeCampaign(id);
  }

  @HttpCode(201)
  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async deleteCampaign(@Param('id') id: string) {
    await this.campaignService.deleteCampaign(id);
  }
}
