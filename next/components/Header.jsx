import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    cursor: 'pointer',
    fontFamily: 'Modak',
    fontSize: 36,
    letterSpacing: 1.5,
    lineHeight: 'inherit',
    color: '#fff'
  },
}));

function ElevationScroll(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} color="primary">
          <Toolbar>
            <Link href="/">
              <Typography variant="h6" className={classes.title}>VocabiApp</Typography>
            </Link>
            <Link href="/signup">
              <Button color="inherit">Sign up</Button>
            </Link>
            <Link href="/login">
              <Button color="inherit">Log in</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
