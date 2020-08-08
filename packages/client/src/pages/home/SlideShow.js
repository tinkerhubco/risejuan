import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const SlideShowBox = styled(Box)({
  backgroundImage:
    'url(https://www.sos-childrensvillages.org/getmedia/c52317be-10b1-4471-a215-21e481f1c956/58-Children-play-in-Gursum-village_1200x630.jpg?width=1200&height=630&ext=.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '75vh',
});

const SlideShowContainer = styled(Container)({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const SlideShowTextContainer = styled(Box)({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '90%',
});

const SlideShowText = styled(Box)({
  margin: 15,
  color: '#FFFFFF',
});

const SlideShowButton = styled(Button)({
  marginTop: 10,
  padding: 12,
  paddingLeft: 20,
  paddingRight: 20,
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: 16,
});

export const SlideShow = () => {
  return (
    <SlideShowBox>
      <SlideShowContainer>
        <SlideShowTextContainer>
          <SlideShowText fontWeight="fontWeightBold" fontSize={40}>
            Helping communities and local
            <br />
            businesses grow together
          </SlideShowText>
          <SlideShowText fontWeight="fontWeightLight" fontSize={30}>
            Get Started Today.
          </SlideShowText>
          <SlideShowText>
            <SlideShowButton size="large" variant="contained" color="primary">
              Campaign with RiseJuan
            </SlideShowButton>
          </SlideShowText>
        </SlideShowTextContainer>
      </SlideShowContainer>
    </SlideShowBox>
  );
};
