import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth/Auth';

const Private = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default Private;
