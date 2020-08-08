import { Attachment } from "../schemas/attachment.schema";
import { IsNotEmpty } from "class-validator";

export class PostCampaignUpdateDto {
    @IsNotEmpty()
    attachment: Attachment;

    @IsNotEmpty()
    description: string;
}