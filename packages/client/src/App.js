import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Discover } from './pages/Discover';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Discover} path="/discover" />
      </Switch>
    </Router>
  );
}

export default App;
