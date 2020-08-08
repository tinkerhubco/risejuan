import { Injectable } from '@nestjs/common';
import { CampaignService } from '../campaign/campaign.service';

@Injectable()
export class OrganizerService {
  constructor(private readonly campaignService: CampaignService) {}

  public async findAll(organizerId: string) {
    return this.campaignService.findAllWithOrganizer(organizerId);
  }

  public async findOne(organizerId: string, campaignId: string) {
    return this.campaignService.findOneWithOrganizer(organizerId, campaignId);
  }
}
