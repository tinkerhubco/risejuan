import React from 'react';
import { Container, Box, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import { SlideShow, SlideShowButton } from './home/SlideShow';

import { Campaign, FixedHeader, Footer } from '../components';

const SectionBox = styled(Box)({
  backgroundColor: 'transparent',
});

const SectionBoxColored = styled(Box)({
  backgroundColor: '#F8F5F6',
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

const FeatureGrid = styled(Grid)({
  padding: 15,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: 20,
  textAlign: 'center',
  minWidth: 200,
});

const FeatureDescription = styled(Box)({
  marginTop: 20,
});

const FeatureGridButton = styled(SlideShowButton)({
  alignSelf: 'center',
  marginTop: 30,
});

export const Home = () => {
  return (
    <Box>
      <FixedHeader />
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
          <SectionTitle
            fontWeight="fontWeightBold"
            fontSize={28}
            alignSelf="center"
            textAlign="center"
          >
            Helping communities without losing a dime
          </SectionTitle>
          <Grid container direction="row" justify="space-evenly">
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Win Win
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultricies orci mauris, sed scelerisque lorem
                consectetur quis.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Campaign in minutes
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultricies orci mauris, sed scelerisque lorem
                consectetur quis.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Win Win
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultricies orci mauris, sed scelerisque lorem
                consectetur quis.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Win Win
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultricies orci mauris, sed scelerisque lorem
                consectetur quis.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Campaign in minutes
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultricies orci mauris, sed scelerisque lorem
                consectetur quis.
              </FeatureDescription>
            </FeatureGrid>
            <FeatureGrid xs={3}>
              <Box fontWeight="fontWeightBold" fontSize={18}>
                Win Win
              </Box>
              <FeatureDescription fontWeight="fontWeightLight" fontSize={18}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultricies orci mauris, sed scelerisque lorem
                consectetur quis.
              </FeatureDescription>
            </FeatureGrid>
          </Grid>
          <FeatureGridButton size="large" variant="contained">
            Campaign with RiseJuan
          </FeatureGridButton>
        </SectionContainer>
      </SectionBoxColored>
      <SectionBox>
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
      </SectionBox>
      <Footer />
    </Box>
  );
};
