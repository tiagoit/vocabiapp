/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  langsList: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > button': {
      minWidth: 120,
      margin: 8,
      padding: 8,
      backgroundColor: '#eee',
      border: '1px solid #aaa',
      borderRadius: 4,
      cursor: 'pointer',
      '&:hover, &.selected': {
        backgroundColor: '#aaa',
      },
      '& > img': {
        marginRight: 12,
      },
    },
  },
});

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
  const { classes } = props;
  const { sourceOrTarget } = useParams();

  const setLang = ({ target }) => {
    const button = (target.type !== 'button') ? target.parentElement : target;
    const code = button.dataset.code;
  };

  const langList = languages.map((lang) => (
    <button type="button" key={lang.code} data-code={lang.code} onClick={setLang}>
      <img src={`/flags/${lang.code}.png`} alt={lang.name} />
      <span>{lang.name}</span>
    </button>
  ));
  const title = sourceOrTarget === 'source' ? 'I speak: ' : 'I want to learn:';

  return (
    <>
      <h1>{title}</h1>
      <div className={classes.langsList}>
        {langList}
      </div>
    </>
  );
};

Lang.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lang);
