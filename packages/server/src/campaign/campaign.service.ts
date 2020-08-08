import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Campaign } from './campaign.schema';
import { CreateCampaignDto } from './create-campaign.dto';
import { PostCampaignUpdateDto } from './post-campaign-update.dto';
import { CampaignUpdate } from '../schemas/campaign-update.schema';
import { Attachment } from '../schemas/attachment.schema';
import { Donor } from '../schemas/donor.schema';
import { PostDonorDto } from './post-donor.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>,
    @InjectModel(CampaignUpdate.name)
    private readonly campaignUpdateModel: Model<CampaignUpdate>,
    @InjectModel(Attachment.name)
    private readonly attachmentModel: Model<Attachment>,
    @InjectModel(Donor.name)
    private readonly donorModel: Model<Donor>,
  ) {}

  public async create(createCampaignDto: CreateCampaignDto) {
    const createdCampaign = new this.campaignModel(createCampaignDto);
    return createdCampaign.save();
  }

  public async findAll() {
    return this.campaignModel.find().exec();
  }

  public async findOne(campaignId: string) {
    return this.campaignModel.findById(campaignId).exec();
  }

  public async findAllWithOrganizer(organizerId: string) {
    return this.campaignModel.find({ 'organizer.id': organizerId }).exec();
  }

  public async findOneWithOrganizer(organizerId: string, campaignId: string) {
    return this.campaignModel
      .find({ 'organizer.id': organizerId, _id: campaignId })
      .exec();
  }

  public async postCampaignUpdate(
    campaignId: string,
    postCampaignUpdateDto: PostCampaignUpdateDto,
  ) {
    const attachment = new this.attachmentModel(
      postCampaignUpdateDto.attachment,
    );
    const createdCampaignUpdate = new this.campaignUpdateModel({
      ...postCampaignUpdateDto,
      attachment,
    });
    const campaign = await this.campaignModel.findById(campaignId);
    campaign.updates.push(createdCampaignUpdate);
    return campaign.save();
  }

  public async postDonor(campaignId: string, postDonorDto: PostDonorDto) {
    const donor = new this.donorModel(postDonorDto);
    const campaign = await this.campaignModel.findById(campaignId);
    campaign.donors.push(donor);
    return campaign.save();
  }
}
