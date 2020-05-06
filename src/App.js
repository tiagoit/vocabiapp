import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import firebase from "./components/firebase";
import { CircularProgress } from "@material-ui/core";

// Views
import LandingPage from "views/LandingPage/LandingPage.js";
import Profile from "views/Profile/Profile.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import LanguageSelection from "views/LanguageSelection/LanguageSelection.js";
import PasswordReset from "views/auth/PasswordReset";
import PasswordResetHandler from "./views/auth/PasswordResetHandler";

// TODO: Remove
import Components from "views/Components/Components.js";

var hist = createBrowserHistory();

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = React.useState(false);

  React.useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <Router history={hist}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password-reset" component={PasswordReset} />
        <Route path="/password-reset-handler" component={PasswordResetHandler} />
        <Route path="/profile" component={Profile} />
        <Route path="/language-selection" component={LanguageSelection} />
        <Route path="/components" component={Components} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  ) : (
    <div id="loader" style={{ textAlign: "center", marginTop: "240px" }}>
      <CircularProgress />
    </div>
  );
}
