import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Campaign } from "../campaign/campaign.schema";
import { CampaignUpdateSchema } from "../schemas/campaign-update.schema";
import { OrganizerController } from "./organizer.controller";
import { OrganizerService } from "./organizer.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Campaign.name, schema: CampaignUpdateSchema }
        ]),
    ],
    controllers: [OrganizerController],
    providers: [OrganizerService]
})
export class OrganizerModule {}