import React from 'react';

import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Discover } from './pages/Discover';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Logout } from './pages/Logout';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Discover} path="/discover" />
          {/* temporary route */}
          <Route component={Login} path="/login" />
          {/* temporary route */}
          <Route component={Logout} path="/logout" />
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
