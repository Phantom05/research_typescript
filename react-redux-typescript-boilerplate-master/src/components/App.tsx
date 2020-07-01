import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { Home } from '@/pages';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
));
