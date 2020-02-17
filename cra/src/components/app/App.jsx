import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import ProtectedRoute from '../ProtectedRoute';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Layout from './Layout';
import Play from '../Play';
import { logoutUser } from '../../actions';

const App = (props) => {
  const handleLogout = () => {
    const { dispatch } = props;
    dispatch(logoutUser());
  };

  const { isAuthenticated, isVerifying } = props;
  return (
    <>
      <CssBaseline />
      <Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <ProtectedRoute exact path="/play" component={Play} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
        </Switch>
      </Layout>
    </>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}
export default connect(mapStateToProps)(App);
