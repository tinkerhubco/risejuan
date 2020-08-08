import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { styled } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

import headerLogo from '../assets/header-logo.svg';

export function FixedHeader() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.AppBarWrapper>
      <AppBar color="inherit" position="fixed" elevation={2}>
        <S.Toolbar>
          <Button color="primary" component={RouterLink} to="/discover">
            Discover Campaigns
          </Button>
          <S.LogoImageWrapper component={RouterLink} to="/">
            <S.LogoImage component="img" src={headerLogo} />
          </S.LogoImageWrapper>
          <Box display="flex">
            {!isAuthenticated && (
              <S.SignInButton color="primary" onClick={loginWithRedirect}>
                Sign in
              </S.SignInButton>
            )}
            <Button
              color="primary"
              size="large"
              variant="contained"
              component={isAuthenticated ? RouterLink : undefined}
              to={isAuthenticated ? '/create' : undefined}
              onClick={isAuthenticated ? undefined : loginWithRedirect}
            >
              Start a campaign
            </Button>
            {isAuthenticated && (
              <Box ml={2}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {/* TODO:  */}
                  {/* <MenuItem onClick={handleClose}>My campaigns</MenuItem> */}
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              </Box>
            )}
          </Box>
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
  RightAppBarBlock: styled(Box)({
    display: 'flex',
  }),
  SignInButton: styled(Button)(({ theme }) => ({
    marginRight: theme.spacing(2),
  })),
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
