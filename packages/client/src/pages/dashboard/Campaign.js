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

import { styled } from '@material-ui/core/styles';

const RootCard = styled(Card)({
  maxWidth: 280,
  marginTop: 30,
});

const MediaCard = styled(CardMedia)({
  height: 100,
});

export const Campaign = () => {
  return (
    <RootCard>
      <CardActionArea>
        <MediaCard
          image="https://www.sos-childrensvillages.org/getmedia/c52317be-10b1-4471-a215-21e481f1c956/58-Children-play-in-Gursum-village_1200x630.jpg?width=1200&height=630&ext=.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            Donation to St. Luke's Hospital
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Draft
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" fullWidth color="primary">
          Edit
        </Button>
      </CardActions>
    </RootCard>
  );
};
