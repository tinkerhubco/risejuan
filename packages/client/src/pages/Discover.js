import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import useSWR from 'swr';

import { Campaign, FixedHeader, Footer } from '../components';
import { GET_ALL_CAMPAIGNS_URL } from '../constants/api';

import { fetcher } from '../utils/fetcher';

const SectionBoxColored = styled(Box)({
  backgroundColor: '#F8F5F6',
});

const TopSectionBox = styled(Box)({
  height: '40vh',
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

export const Discover = () => {
  const { data: campaigns } = useSWR(GET_ALL_CAMPAIGNS_URL, fetcher);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <FixedHeader />
      <TopSectionBox>
        <SectionContainer>
          <SectionTitle fontWeight="fontWeightBold" fontSize={40}>
            Browse Campaigns
          </SectionTitle>
          <SectionTitle fontWeight="fontWeightLight" fontSize={24}>
            Check out what local businesses got to offer
          </SectionTitle>
        </SectionContainer>
      </TopSectionBox>
      <SectionBoxColored>
        <SectionContainer>
          <Grid container direction="row" justify="space-evenly">
            {campaigns
              ? campaigns.reverse().map((campaign, key) => {
                  return <Campaign key={key} campaign={campaign} />;
                })
              : null}
          </Grid>
        </SectionContainer>
      </SectionBoxColored>
      <Footer />
    </Box>
  );
};
