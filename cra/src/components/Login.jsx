/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { loginUser } from '../actions';

const styles = () => ({
  form: {
    '& .MuiFormControl-root': {
      width: 280,
      display: 'block',
      margin: '20px auto',
      '& > Button': { width: '100%' },
      '& .MuiInput-root': { width: '100%' },
    },
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    margin: 'auto',
  },
});

const Login = (props) => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const { classes, isLoggingIn, loginError, isAuthenticated } = props;

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    const { email, password } = state;
    dispatch(loginUser(email, password));
  };

  // const handleResetPass = () => {
  //   console.log('resrt pass');
  // };

  if (isAuthenticated) return <Redirect to="/play" />;
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
        <Typography variant="h4" component="h1">Login</Typography>
      </Box>

      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField required id="email" label="Email" type="email" onChange={handleChange('email')} />

        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  tabIndex="-1"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>

        {loginError && (
          <Box display="flex" justifyContent="center">
            <Typography component="p" color="secondary">
              Incorrect email or password.
            </Typography>
          </Box>
        )}

        <FormControl>
          <Button variant="contained" color="primary" type="submit" disabled={isLoggingIn}>Login</Button>
        </FormControl>

      </form>

      {/* <Box my={4} mx="auto" width={320}><hr /></Box>

      <Box className={classes.social}>
        <Button variant="outlined" color="secondary" type="submit">Login with Google</Button>
        <Button variant="outlined" color="secondary" type="submit">Login with Facebook</Button>
      </Box> */}

      <Box display="flex" justifyContent="center" mt={3}>
        <Link to="/signup" className={classes.link}>Don&apos;t have an account?</Link>
      </Box>

      {/* <Box display="flex" justifyContent="center" mt={0}>
        <button onClick={handleResetPass}>Reset my password!</button>
      </Box> */}
    </>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
});

export default withStyles(styles)(connect(mapStateToProps)(Login));
