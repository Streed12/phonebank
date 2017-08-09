import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AccountPage,
  EditAccountInfo,
  LandingPage } from '../components/index';

const PrivateRoutes = () => (
  <Switch>
    <Route path="/registration" render={() => <Redirect to="/account" />} />
    <Route path="/login" render={() => <Redirect to="/account" />} />
    <Route exact path="/account/:id/edit" component={EditAccountInfo} />
    <Route path="/account" component={AccountPage} />
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default PrivateRoutes;
