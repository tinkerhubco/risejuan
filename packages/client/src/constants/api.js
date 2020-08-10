export const GET_ALL_CAMPAIGNS_ENDPOINT = '/api/campaigns';
export const CREATE_CAMPAIGN_ENDPOINT = '/api/campaigns';
export const POST_CAMPAIGN_UPDATES_ENDPOINT = '/api/campaigns/{{id}}/updates';

export const createGetCampaignEndpoint = ({ campaignId }) =>
  `/api/campaigns/${campaignId}`;

export const createGetOwnerCampaignsEndpoint = ({ userId }) =>
  `/api/organizer/${userId}/campaigns`;

export const createDonateEndpoint = ({ campaignId }) =>
  `/api/campaigns/${campaignId}/donors`;
