import React from 'react';
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';

const GenerateRoute = ({ ...props }) => {
  if (props.authed()) {
    return <PrivateRoutes />;
  }
  return <PublicRoutes />;
};

export default GenerateRoute;
