import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
  root: {
    '& .MuiFormControl-root': {
      width: 220,
      display: 'block',
      margin: '20px auto',
      '& > Button': {
        width: '100%',
      },
    },
  },
});

export default () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

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
    console.log(state);
  };

  // const handleResetPass = () => {
  //   console.log('resrt pass');
  // };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={3}>
        <Typography variant="h4" component="h1">Login</Typography>
      </Box>

      <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
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
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>

        <FormControl>
          <Button variant="contained" color="primary" type="submit">Login</Button>
        </FormControl>
      </form>

      <Box my={4} mx="auto" width={320}><hr /></Box>

      <Box my={2} display="flex" justifyContent="center">
        <Button variant="outlined" color="secondary" type="submit">Login with Google</Button>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" color="secondary" type="submit">Login with Facebook</Button>
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Link to="/signup">Don&apos;t have an account?</Link>
      </Box>

      {/* <Box display="flex" justifyContent="center" mt={0}>
        <button onClick={handleResetPass}>Reset my password!</button>
      </Box> */}
    </>
  );
};
