import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Connexion from './Connexion';
import Enregistres from './Enregistres';
import Places from './Places';
import Place from './Place';

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
      <Route path="/">
        <Places />
      </Route>
    </Switch>
  );
}
