/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

import { resetPassAction, resetPassErrorAction, startLoadAction } from '../redux/actions';

const styles = () => ({
  form: {
    '& .MuiFormControl-root': {
      width: 280,
      display: 'block',
      margin: '20px auto',
      '& > Button': { width: '100%' },
      '& .MuiInput-root': { width: '100%' },
    },
    '& .error-message': {
      width: 'calc(100% - 40px)',
      position: 'absolute',
      marginTop: '-8px',
      '& p': {
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'darkcyan',
      },
    },
    '& .submit-button': { 'margin-top': '44px' },
  },
});

const ResetPass = (props) => {
  const [state, setState] = React.useState({ email: '' });
  const {
    classes,
    dispatch,
    isAuthenticated,
    isResettingPass,
    resetPassError,
    resetPassSuccess,
  } = props;

  const handleChange = (prop) => (event) => {
    dispatch(resetPassErrorAction(''));
    setState({ ...state, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoadAction('reset-pass'));
    const { email } = state;
    dispatch(resetPassAction(email));
  };

  if (isAuthenticated) return <Redirect to="/play" />;
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
        <Typography variant="h4" component="h1">Password reset</Typography>
      </Box>

      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField required id="email" label="Email" type="email" onChange={handleChange('email')} />

        {resetPassError && (
          <Box display="flex" justifyContent="center" className="error-message">
            <Typography component="p">{resetPassError}</Typography>
          </Box>
        )}

        <FormControl className="submit-button">
          <Button variant="contained" color="primary" type="submit" disabled={isResettingPass}>Reset my password</Button>
        </FormControl>
      </form>

      {/* <Box my={4} mx="auto" width={320}><hr /></Box>

      <Box className={classes.social}>
        <Button variant="outlined" color="secondary" type="submit">Login with Google</Button>
        <Button variant="outlined" color="secondary" type="submit">Login with Facebook</Button>
      </Box> */}

      {resetPassSuccess && (
        <Box display="flex" justifyContent="center">
          <Typography component="p">Check your inbox, an email with instructions to reset your password has been sent.</Typography>
        </Box>
      )}


      <Box display="flex" justifyContent="center" mt={3}>
        <Link to="/login" className={classes.link}>Login</Link>
      </Box>
    </>
  );
};

ResetPass.propTypes = {
  classes: PropTypes.object.isRequired,
  isResettingPass: PropTypes.bool.isRequired,
  resetPassError: PropTypes.string.isRequired,
  resetPassSuccess: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isResettingPass: state.auth.isResettingPass,
  resetPassError: state.auth.resetPassError,
  resetPassSuccess: state.auth.resetPassSuccess,
  isAuthenticated: state.auth.isAuthenticated,
});

export default withStyles(styles)(connect(mapStateToProps)(ResetPass));
