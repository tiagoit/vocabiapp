/* eslint-disable react/no-children-prop */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = (props) => {
  const {
    children, user, isAuthenticated, handleLogout,
  } = props;

  return (
    <>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} user={user} />
      <Container maxWidth="md" children={children} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Layout;
