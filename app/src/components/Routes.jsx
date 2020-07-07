import React from 'react';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Places from './Places';
import Place from './Place';

import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/places/:id">
        <Place />
      </Route>
      <Route path="/places">
        <Places />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
