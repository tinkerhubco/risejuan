import { Injectable } from "@nestjs/common";
import { CampaignService } from "../campaign/campaign.service";

@Injectable()
export class OrganizerService {
    constructor(private readonly campaignService: CampaignService) { }

    public async findAll(organizerId: string) {
        return await this.campaignService.findAllWithOrganizer(organizerId);
    }

    public async findOne(organizerId: string, campaignId: string) {
        return await this.campaignService.findOneWithOrganizer(organizerId, campaignId);
    }
}