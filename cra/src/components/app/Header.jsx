import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    cursor: 'pointer',
    fontFamily: 'Modak',
    fontSize: 36,
    letterSpacing: 1.5,
    lineHeight: 'inherit',
  },
});

function ElevationScroll(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar() {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.root} color="primary">
          <Toolbar>
            <Link to="/" className={classes.title}>
              VocabiApp
            </Link>
            <Link to="/signup">
              <Button color="inherit">Signup</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
