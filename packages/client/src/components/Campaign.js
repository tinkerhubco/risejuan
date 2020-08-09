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
  maxWidth: 280,
  marginTop: 30,
});

const MediaCard = styled(CardMedia)({
  height: 180,
});

const FundingProgress = styled(LinearProgress)({
  marginTop: 10,
  marginBottom: 10,
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
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Last donation 3d ago
          </Typography>
          <FundingProgress variant="determinate" value={20} />
          <Typography variant="h6" color="textSecondary">
            <b>$230 raised</b> of $3,500
          </Typography>
        </CardContent>
      </CardActionArea>
    </RootCard>
  );
};
