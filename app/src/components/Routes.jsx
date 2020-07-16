import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Connexion from './Connexion';
import Places from './Places';
import Place from './Place';
import Maintenance from './Maintenance';
import AddPlace from './AddPlace';
import Profil from './Profil';
import Home from './Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/addPlace">
        <AddPlace />
      </Route>
      <Route path="/places/:id">
        <Place />
      </Route>
      <Route path="/places">
        <Places />
      </Route>
      <Route path="/maintenance">
        <Maintenance />
      </Route>
      <Route path="/profil">
        <Profil />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
