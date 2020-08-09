import React from 'react';

import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { Discover } from './pages/Discover';
import { Home } from './pages/Home';
import { CreateCampaign } from './pages/CreateCampaign';
import { Dashboard } from './pages/Dashboard';
import { CampaignDetails } from './pages/CampaignDetails';

import { theme } from './theme';
import { fetcher } from './utils';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <SWRConfig value={{ fetcher }}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact component={Home} path="/" />
              <Route component={Discover} path="/discover" />
              <Route component={CreateCampaign} path="/create" />
              <Route component={Dashboard} path="/dashboard" />
              <Route
                component={CampaignDetails}
                path="/campaigns/:campaignId"
              />
            </Switch>
          </Router>
        </ThemeProvider>
      </SWRConfig>
    </Auth0Provider>
  );
}

export default App;
