import React from 'react';
import PropTypes from 'prop-types';
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

const Header = (props) => {
  const classes = useStyles();
  const { user, isAuthenticated, handleLogout } = props;

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.root} color="primary">
          <Toolbar>
            <Link to="/" className={classes.title}>
              VocabiApp
            </Link>
            {
              !isAuthenticated && (
                <>
                  <Link to="/signup">
                    <Button tabIndex="-1" color="inherit">Signup</Button>
                  </Link>
                  <Link to="/login">
                    <Button tabIndex="-1" color="inherit">Login</Button>
                  </Link>
                </>
              )
            }
            {
              isAuthenticated && (
                <>
                  <Link to="/language">
                    <Button color="inherit">{user.name}</Button>
                  </Link>
                  <Link to="/play">
                    <Button color="inherit">Play</Button>
                  </Link>
                  <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </>
              )
            }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
