import React from 'react';

import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Discover } from './pages/Discover';
import { Home } from './pages/Home';

import { theme } from './theme';
import { CreateCampaign } from './pages/CreateCampaign';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={Discover} path="/discover" />
            <Route component={CreateCampaign} path="/create" />
          </Switch>
        </Router>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
