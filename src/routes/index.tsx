import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <SignIn />
    </Route>
    <Route exact path="/login">
      <SignUp />
    </Route>
  </Switch>
);

export default Routes;
