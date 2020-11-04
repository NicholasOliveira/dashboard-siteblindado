import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

import SSL from '../pages/SSL';
import Loja from '../pages/Loja';
import Blindagem from '../pages/Blindagem';
import Sistema from '../pages/Sistema';
import Cart from '../pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/Cart" component={Cart} isPrivate />
      <Route path="/ssl" component={SSL} isPrivate />
      <Route path="/loja" component={Loja} isPrivate />
      <Route path="/Blindagem" component={Blindagem} isPrivate />
      <Route path="/Sistema" component={Sistema} isPrivate />
    </Switch>
  );
}
