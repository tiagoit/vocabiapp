import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

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

export default function Register(props) {
  const { ...rest } = props;
  const classes = useStyles();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [conf, setConf] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  React.useEffect(() => {
    setCardAnimation("");
  }, []);

  const register = async (ev) => {
    ev.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      await firebase.register(name, email, password, conf);
      props.history.replace("/dashboard");
    } catch (error) {
      setFormError(error.message);
      setTimeout(() => setFormError(""), 5000);
      setIsLoading(false);
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
                <form className={classes.form} onSubmit={(ev) => register(ev)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Register</h4>
                    {/* <div className={classes.socialLine}>
                      <Button justIcon href="#pablo" target="_blank" color="transparent" onClick={(e) => e.preventDefault()}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon href="#pablo" target="_blank" color="transparent" onClick={(e) => e.preventDefault()}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button justIcon href="#pablo" target="_blank" color="transparent" onClick={(e) => e.preventDefault()}>
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div> */}
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Name"
                      id="name"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "text",
                        value: name,
                        onChange: (e) => setName(e.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
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
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
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
                    <CustomInput
                      labelText="Password confirmation"
                      id="conf"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "password",
                        value: conf,
                        onChange: (e) => setConf(e.target.value),
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
                    <Link to="/login" style={{ marginBottom: 8 }}>
                      Already have an account?
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

Register.propTypes = {
  history: PropTypes.object,
};
