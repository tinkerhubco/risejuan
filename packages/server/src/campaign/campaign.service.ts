import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Campaign } from './campaign.schema';
import { CreateCampaignDto } from './create-campaign.dto';
import { PostCampaignUpdateDto } from './post-campaign-update.dto';
import { CampaignUpdate } from 'src/schemas/campaign-update.schema';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
    @InjectModel(CampaignUpdate.name) private campaignUpdateModel: Model<CampaignUpdate>,
  ) {}

  public async create(createCampaignDto: CreateCampaignDto) {
    const createdCampaign = new this.campaignModel(createCampaignDto);
    return createdCampaign.save();
  }

  public async findAll() {
    return this.campaignModel.find().exec();
  }

  public async postCampaignUpdate(campaignId: string, postCampaignUpdateDto: PostCampaignUpdateDto) {
    const createdCampaignUpdate = new this.campaignUpdateModel(postCampaignUpdateDto);
    const campaign = await this.campaignModel.findOne({ _id: campaignId });
    campaign.updates.push(createdCampaignUpdate);
    return campaign.save();
  }
}
