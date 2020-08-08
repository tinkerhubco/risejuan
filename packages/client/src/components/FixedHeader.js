import React from 'react';

import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/styles';

import headerLogo from '../assets/header-logo.svg';

export function FixedHeader() {
  return (
    <S.AppBarWrapper>
      <AppBar color="inherit" position="fixed" elevation={2}>
        <S.Toolbar>
          <Button color="primary">Discover Campaigns</Button>
          <S.LogoImageWrapper height="280px">
            <S.LogoImage component="img" src={headerLogo} />
          </S.LogoImageWrapper>
          <Button color="primary">Sign in</Button>
        </S.Toolbar>
      </AppBar>
    </S.AppBarWrapper>
  );
}

const S = {
  AppBarWrapper: styled(Box)({
    flexGrow: 1,
  }),
  LogoImageWrapper: styled(ButtonBase)({
    height: '48px',
  }),
  LogoImage: styled(Box)({
    height: '100%',
    width: '100%',
  }),
  Title: styled(Typography)({
    flexGrow: 1,
  }),
  Toolbar: styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  })),
};
