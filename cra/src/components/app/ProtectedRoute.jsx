/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const { location } = props;
      if (isVerifying) return <div />;
      if (isAuthenticated) return <Component {...props} />;
      return <Redirect to={{ pathname: '/', state: { from: location } }} />;
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

ProtectedRoute.defaultProps = {
  location: {},
};

export default ProtectedRoute;
