/* eslint-disable no-multi-spaces */
/* eslint-disable key-spacing */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pos from './Pos';

const Play = (props) => {
  const { user } = props;
  const partsOfSpeech = {
    noun:         { levels: 5, en: 'Noun',        description: '' },
    pronoum:      { levels: 5, en: 'Pronoun',     description: '' },
    verb:         { levels: 5, en: 'Verb',        description: '' },
    adjective:    { levels: 5, en: 'Adjective',   description: '' },
    adverb:       { levels: 5, en: 'Adverb',      description: '' },
    preposition:  { levels: 5, en: 'Preposition', description: '' },
    conjunction:  { levels: 5, en: 'Conjunction', description: '' },
  };

  if (user.uid && !user.source) return <Redirect to="/language/source" />;
  return (
    <>
      <h1>Play</h1>
      <Pos pos={partsOfSpeech} />
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
