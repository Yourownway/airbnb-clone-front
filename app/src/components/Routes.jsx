import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
