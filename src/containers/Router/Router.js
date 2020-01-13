import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../Home';
import NotFound from '../NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route compponent={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
