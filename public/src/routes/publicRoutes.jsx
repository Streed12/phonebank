import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LogInForm } from '../components/index';
import RegistrationForm from '../containers/registration';

const PublicRoutes = () => (
  <Switch>
    <Route path="/registration" component={RegistrationForm} />
    <Route path="/login" component={LogInForm} />
    <Route exact path="/account/:id/edit" render={() => <Redirect to="/login" />} />
    <Route path="/account" render={() => <Redirect to="/login" />} />
    <Route path="/" render={() => <Redirect to="/login" />} />
  </Switch>
);

export default PublicRoutes;
