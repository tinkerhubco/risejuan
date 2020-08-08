import React from 'react';

import { Box, Container } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const FooterContainer = styled(Container)({
  paddingBottom: 40,
  display: 'flex',
  justifyContent: 'center',
});
export function Footer() {
  return (
    <FooterContainer>
      <Box>Copyright &copy; 2020 Tinkerhub</Box>
    </FooterContainer>
  );
}