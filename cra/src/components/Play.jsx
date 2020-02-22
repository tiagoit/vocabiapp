/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Play = (props) => {
  const { user } = props;
  console.log(user);
  if (!user.source) return <Redirect to="/language/source" />;
  return (
    <>
      <h1>Play</h1>
      {user.name}
    </>
  );
};

Play.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default connect(mapStateToProps)(Play);
