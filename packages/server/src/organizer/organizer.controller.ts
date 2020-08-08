import { Controller, Get, Param } from '@nestjs/common';
import { OrganizerService } from './organizer.service';

@Controller('organizer')
export class OrganizerController {
  constructor(private readonly organizerService: OrganizerService) {}

  @Get(':id/campaigns')
  public getCampaigns(@Param('id') id: string) {
    return this.organizerService.findAll(id);
  }

  @Get(':id/campaigns/:campaignId')
  public getCampaign(
    @Param('id') id: string,
    @Param('campaignId') campaignId: string,
  ) {
    return this.organizerService.findOne(id, campaignId);
  }
}
