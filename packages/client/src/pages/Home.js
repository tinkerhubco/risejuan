import React from 'react';
import { Container, Box, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import { SlideShow } from './home/SlideShow';
import { Campaign } from './common/Campaign';

const SectionBox = styled(Box)({
  backgroundColor: 'transparent',
});

const SectionBoxColored = styled(Box)({
  backgroundColor: '#FAF8F6',
});

const SectionContainer = styled(Container)({
  display: 'flex',
  width: '70vw',
  flexDirection: 'column',
  paddingTop: 50,
  paddingBottom: 30,
});

const SectionTitle = styled(Box)({
  marginLeft: 20,
});

const SeeMoreButton = styled(Button)({
  margin: 20,
  alignSelf: 'flex-end',
  textTransform: 'none',
  fontSize: 16,
  color: '#666666',
});

export const Home = () => {
  return (
    <Box>
      <SlideShow />
      <SectionBox>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={28}>
            Latest Campaigns
          </SectionTitle>
          <Grid container direction="row" justify="space-evenly">
            <Campaign />
            <Campaign />
            <Campaign />
          </Grid>
          <SeeMoreButton color="primary" size="large">
            See more
          </SeeMoreButton>
        </SectionContainer>
      </SectionBox>
      <SectionBoxColored>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={28}>
            Rise Juan Campaigns near you
          </SectionTitle>
          <Grid container direction="row" justify="space-evenly">
            <Campaign />
            <Campaign />
            <Campaign />
            <Campaign />
            <Campaign />
            <Campaign />
          </Grid>
          <SeeMoreButton color="primary" size="large">
            See more
          </SeeMoreButton>
        </SectionContainer>
      </SectionBoxColored>
    </Box>
  );
};
