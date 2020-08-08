import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Campaign } from "../campaign/campaign.schema";
import { Model } from "mongoose";

@Injectable()
export class OrganizerService {
    constructor(@InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>) {}

    public async findAll(email: string) {
        return this.campaignModel.find({ email }).exec();
    }
}