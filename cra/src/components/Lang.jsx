/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const languages = [
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'ja', name: 'Japanese' },
  { code: 'it', name: 'Italian' },
  { code: 'en', name: 'English' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ru', name: 'Russian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'tr', name: 'Turkish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'el', name: 'Greek' },
  { code: 'ga', name: 'Irish' },
  { code: 'pl', name: 'Polish' },
];

const Lang = (props) => {
  const { user } = props;
  console.log(user);
  const langList = languages.map((lang) => (
    <div>
      <img src="{lang.name}.png" alt={lang.name} />
      <div>{lang.name}</div>
    </div>
  ));
  return (
    <>
      <h1>Lang</h1>
      {langList}
    </>
  );
};

Lang.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Lang;
