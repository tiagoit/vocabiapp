import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Container maxWidth="md">
        { children }
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
