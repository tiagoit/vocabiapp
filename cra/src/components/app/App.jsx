/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import ProtectedRoute from './ProtectedRoute';
import Home from '../Home';
import Signup from '../Signup';
import Login from '../Login';
import ResetPass from '../ResetPass';
import Layout from './Layout';
import Play from '../Play';
import Language from '../Language';
import { logoutUserAction } from '../../redux/actions';

const App = (props) => {
  const handleLogout = () => {
    const { dispatch } = props;
    dispatch(logoutUserAction());
  };

  const {
    isAuthenticated,
    isVerifying,
    isLoading,
    user,
  } = props;

  return (
    <>
      <CssBaseline />
      <Layout
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        isLoading={isLoading}
        user={user}
      >
        <Switch>
          <Route exact path="/"><Home /></Route>
          <ProtectedRoute exact path="/play" component={Play} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <ProtectedRoute exact path="/language/:sourceOrTarget" component={Language} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/password-reset"><ResetPass /></Route>
        </Switch>
      </Layout>
    </>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    isLoading: state.app.isLoading,
    user: state.users.user,
  };
}
export default connect(mapStateToProps)(App);
