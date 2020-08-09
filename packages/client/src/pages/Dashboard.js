import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Box, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import useSWR from 'swr';

import { FixedHeader, Footer } from '../components';
import { Campaign } from './dashboard/Campaign';
import { createGetOwnerCampaignsEndpoint } from '../constants/api';

// const SectionBox = styled(Box)({
//   backgroundColor: 'transparent',
// });

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

export const Dashboard = () => {
  const { user = {} } = useAuth0();

  const { data: campaigns, error } = useSWR(
    createGetOwnerCampaignsEndpoint({ userId: user.sub }),
  );

  const isLoading = !campaigns && !error;

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  const sortedCampaigns = [...campaigns].sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
  );

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
          <Box ml={1} mt={3}>
            <Button
              color="primary"
              component={RouterLink}
              variant="contained"
              size="large"
              to="/create"
            >
              Create a campaign
            </Button>
          </Box>
        </SectionContainer>
      </TopSectionBox>
      <SectionBoxColored>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={28}>
            On Going Campaigns
          </SectionTitle>
          <Grid container direction="row" justify="space-between">
            {sortedCampaigns.map((campaign) => (
              <Campaign key={campaign._id} campaign={campaign} />
            ))}
          </Grid>
        </SectionContainer>
      </SectionBoxColored>
      {/* <SectionBox>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={28}>
            Fulfilled Campaigns
          </SectionTitle>
          <Grid container direction="row">
            <Campaign campaign={campaign} />
            <Campaign />
            <Campaign />
            <Campaign />
          </Grid>
        </SectionContainer>
      </SectionBox> */}
      <Footer />
    </Box>
  );
};
