import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Connexion from './Connexion';
import Enregistres from './Enregistres';
import Places from './Places';
import Place from './Place';
import Maintenance from './Maintenance';
import Map from './GoogleMap';
import Home from './Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/connexion">
        <Connexion />
      </Route>
      <Route path="/enregistres">
        <Enregistres />
      </Route>
      <Route path="/places/:id">
        <Place />
      </Route>
      <Route path="/maintenance">
        <Maintenance />
      </Route>
      <Route path="/map">
        <Map />
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
