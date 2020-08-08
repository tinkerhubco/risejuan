import { Controller, Get, Param } from "@nestjs/common";
import { OrganizerService } from "./organizer.service";

@Controller('organizers')
export class OrganizerController {
    constructor(private readonly organizerService: OrganizerService) {}

    @Get()
    public getCampaigns() {
        const email = 'johnmichael.doroy@gmail.com';
        console.log(email);
        return this.organizerService.findAll(email);
    }
}