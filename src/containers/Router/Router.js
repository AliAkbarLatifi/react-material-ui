import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../Home';
import Questions from '../Questions'
import QuestionDetail from '../QuestionDetail';
import NotFound from '../NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/questions/:id" exact component={QuestionDetail} />
        <Route path="/questions" exact component={Questions} />
        <Route path="/" exact component={Home} />
        <Route compponent={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
