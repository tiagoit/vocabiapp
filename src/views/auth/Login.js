import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import firebase from "../../components/firebase";

import styles from "assets/jss/views/auth/auth.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

const useQuery = () => queryString.parse(useLocation().search);

export default function Login(props) {
  const { ...rest } = props;
  const classes = useStyles();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const { email: queryEmail } = useQuery();
  if (queryEmail) setEmail(queryEmail);

  React.useEffect(() => {
    setCardAnimation("");
  }, []);

  const login = async (ev) => {
    ev.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      await firebase.login(email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      setIsLoading(false);
      setFormError(error.message);
      setTimeout(() => setFormError(""), 5000);
    }
  };

  return (
    <div>
      <Header absolute color="transparent" brand="Vocabiapp" rightLinks={<HeaderLinks history={props.history} />} {...rest} />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={(ev) => login(ev)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "email",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "password",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter} style={{ flexDirection: "column" }}>
                    <Button type="submit" color="primary">
                      Get started
                    </Button>
                    <hr style={{ width: "100%", margin: "24px 0" }} />
                    <Link to="/register" style={{ marginBottom: 8 }}>
                      Don{"'"}t have an account?
                    </Link>
                    <Link to="/password-reset" style={{ marginBottom: 8 }}>
                      Forgot your password?
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          {formError && <SnackbarContent type="danger" message={formError} close />}
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.object,
};
