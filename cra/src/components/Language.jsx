/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { updateUser } from '../redux/actions';


const styles = () => ({
  languagesList: {
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

const Language = (props) => {
  const { classes, user, dispatch } = props;
  const { sourceOrTarget } = useParams();
  const history = useHistory();

  const setLanguage = (event) => {
    console.log('setLanguage');
    const { target } = event;
    const button = (target.type !== 'button') ? target.parentElement : target;
    const { code } = button.dataset;
    dispatch(updateUser(user.uid, { [sourceOrTarget]: code }));
    console.log(sourceOrTarget);
    history.push((sourceOrTarget === 'source') ? '/language/target' : '/play');
    // return (<Redirect to="/language/target" />);
    // return (sourceOrTarget === 'source') ? <Redirect to="/language/target" /> : <Redirect to="/play" />;
  };

  const title = sourceOrTarget === 'source' ? 'I speak' : 'I want to learn';
  const languagesList = languages.map((l) => (
    <button type="button" key={l.code} data-code={l.code} onClick={setLanguage}>
      <img src={`/flags/${l.code}.png`} alt={l.name} />
      <span>{l.name}</span>
    </button>
  ));

  return (
    <>
      <h1>{title}</h1>
      <div className={classes.languagesList}>{languagesList}</div>
    </>
  );
};

Language.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ user: state.users.user });
export default withStyles(styles)(connect(mapStateToProps)(Language));
