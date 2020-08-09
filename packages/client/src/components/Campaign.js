import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
} from '@material-ui/core';

import { styled } from '@material-ui/core/styles';

const RootCard = styled(Card)({
  width: 280,
  marginTop: 30,
});

const MediaCard = styled(CardMedia)({
  height: 180,
});

const FundingProgress = styled(LinearProgress)({
  marginTop: 10,
  marginBottom: 10,
});

const getDaysDiff = (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const getCampaignStatus = (campaign) => {
  if (!campaign) return 0;
  else if (campaign.targetFund < campaign.currentFund) return 100;
  else return (campaign.currentFund / campaign.targetFund) * 100;
};

const getLastDonorsDescription = (campaign) => {
  console.log(campaign.donors);
  if (!campaign || !campaign.donors || campaign.donors.length == 0)
    return 'Be the first one to donate';
  else {
    var length = campaign.donors.length;
    var lastDonationDate = campaign.donors[length - 1].createdDate;
    var dayDiff = getDaysDiff(new Date(), new Date(lastDonationDate));
    return `Last donation ${dayDiff}d ago`;
  }
};

export const Campaign = (props) => {
  var { campaign } = props;

  return (
    <RootCard>
      <CardActionArea>
        <MediaCard
          image="https://www.sos-childrensvillages.org/getmedia/c52317be-10b1-4471-a215-21e481f1c956/58-Children-play-in-Gursum-village_1200x630.jpg?width=1200&height=630&ext=.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {campaign ? campaign.name : 'Rise Juan Campaign'}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {campaign ? campaign.description : 'No Description added.'}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {getLastDonorsDescription(campaign)}
          </Typography>
          <FundingProgress
            variant="determinate"
            value={getCampaignStatus(campaign)}
          />
          <Typography variant="h6" color="textSecondary">
            {campaign
              ? `$${campaign.currentFund} raised of $${campaign.targetFund}`
              : '<b>$0 raised</b> of $0'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </RootCard>
  );
};
