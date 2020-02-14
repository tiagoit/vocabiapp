import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';

import Layout from './Layout';

export default () => (
  <>
    <CssBaseline />
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </>
);
