/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Play = (props) => {
  const { config } = props;

  if (!config.sourceLang) return <Redirect to="/lang/source" />;
  if (!config.targetLang) return <Redirect to="/lang/target" />;
  return (
    <>
      <h1>Play</h1>
      {}
    </>
  );
};

Play.propTypes = {
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.config,
});

export default connect(mapStateToProps)(Play);
