import React from 'react';
import { Container, Box, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import { FixedHeader, Footer } from '../components';
import { Campaign } from './dashboard/Campaign';

const SectionBox = styled(Box)({
  backgroundColor: 'transparent',
});

const SectionBoxColored = styled(Box)({
  backgroundColor: '#F8F5F6',
});

const TopSectionBox = styled(Box)({
  height: '49vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  paddingBottom: 20,
});

const SectionContainer = styled(Container)({
  display: 'flex',
  width: '70vw',
  flexDirection: 'column',
  paddingTop: 50,
  paddingBottom: 30,
});

const SectionTitle = styled(Box)({
  margin: 10,
});

const CreateButton = styled(Button)({
  marginTop: 24,
  marginLeft: 10,
  padding: 12,
  paddingLeft: 20,
  paddingRight: 20,
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: 14,
  backgroundColor: '#D81B60',
  color: '#FFFFFF',
  alignSelf: 'flex-start',
});

export const Dashboard = () => {
  return (
    <Box>
      <FixedHeader />
      <TopSectionBox>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={40}>
            My Campaigns
          </SectionTitle>
          <SectionTitle fontWeight="fontWeightLight" fontSize={24}>
            Here are all your campaigns from the beginning
          </SectionTitle>
          <CreateButton variant="contained">Create a Campaign</CreateButton>
        </SectionContainer>
      </TopSectionBox>
      <SectionBoxColored>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={28}>
            On Going Campaigns
          </SectionTitle>
          <Grid container direction="row" justify="space-evenly">
            <Campaign />
            <Campaign />
            <Campaign />
          </Grid>
        </SectionContainer>
      </SectionBoxColored>
      <SectionBox>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={28}>
            Fulfilled Campaigns
          </SectionTitle>
          <Grid container direction="row" justify="space-evenly">
            <Campaign />
            <Campaign />
            <Campaign />
            <Campaign />
          </Grid>
        </SectionContainer>
      </SectionBox>
      <Footer />
    </Box>
  );
};
