import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant="contained" onClick={loginWithRedirect}>
      Proceed to login
    </Button>
  );
};
