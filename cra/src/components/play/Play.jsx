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
    noun:         { levels: 5, en: 'Noun' },
    pronoum:      { levels: 5, en: 'Pronoun' },
    verb:         { levels: 5, en: 'Verb' },
    adjective:    { levels: 5, en: 'Adjective' },
    adverb:       { levels: 5, en: 'Adverb' },
    preposition:  { levels: 5, en: 'Preposition' },
    conjunction:  { levels: 5, en: 'Conjunction' },
    interjection: { levels: 5, en: 'Interjection' },
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
