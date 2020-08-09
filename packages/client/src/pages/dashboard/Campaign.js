import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';

import { ATTACHMENT_COVER_PHOTO_TYPE } from '../../constants';

const RootCard = styled(Card)({
  maxWidth: 280,
  marginTop: 30,
});

const MediaCard = styled(CardMedia)({
  height: 160,
});

export const Campaign = ({ campaign }) => {
  const { push } = useHistory();

  const handleCardActionAreaClick = () => {
    push(`/campaigns/${campaign._id}`);
  };

  const campaignMedia = campaign.attachments.find(
    (attachment) => attachment.type === ATTACHMENT_COVER_PHOTO_TYPE,
  ).url;

  const campaignCreatedDate = format(
    new Date(campaign.createdDate),
    'MMMM d, yyyy',
  );

  return (
    <RootCard>
      <CardActionArea onClick={handleCardActionAreaClick}>
        <MediaCard image={campaignMedia} title="Contemplative Reptile" />
        <CardContent>
          <Typography variant="h5" component="h2">
            {campaign.name}
          </Typography>
          <S.CreatedDate variant="body2" color="textSecondary">
            {campaignCreatedDate}
          </S.CreatedDate>
          {/* TODO: */}
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Draft
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          fullWidth
          color="primary"
          onClick={handleCardActionAreaClick}
        >
          Edit
        </Button>
      </CardActions>
    </RootCard>
  );
};

const S = {
  CreatedDate: styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
  })),
};
