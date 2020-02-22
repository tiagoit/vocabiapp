/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Play = (props) => {
  const { user } = props;

  if (!user.sourceLang) return <Redirect to="/lang/source" />;
  if (!user.targetLang) return <Redirect to="/lang/target" />;
  return (
    <>
      <h1>Play</h1>
      {}
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
