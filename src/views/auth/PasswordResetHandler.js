// http://localhost:3000/password-reset-handler?mode=resetPassword&oobCode=RSCia6b58-cRp7CdkxyxOEvzioh5t7TEyTV1LfRUZVkAAAFx4jUDJA&apiKey=AIzaSyDSAl1pNQm2XOOrRrXSHcV0omANfnDTyFU&lang=en

import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";

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

export default function PasswordResetHandler(props) {
  const { ...rest } = props;
  const classes = useStyles();
  const { mode, oobCode } = useQuery();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [conf, setConf] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const [formSuccess, setFormSuccess] = React.useState("");
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  React.useEffect(() => {
    setCardAnimation("");

    (async () => {
      setIsLoading(true);
      if (mode === "resetPassword") {
        try {
          const email = await firebase.verifyPasswordResetCode(oobCode);
          setEmail(email);
        } catch (error) {
          setFormError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [mode, oobCode]);

  const setNewPassword = async (ev) => {
    // console.log("setNewPassword", { oobCode, password, conf });

    ev.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      await firebase.confirmPasswordReset(oobCode, password, conf);
      setFormSuccess("Password changed.");
      setTimeout(() => props.history.replace(`/login?email=${email}`), 3000);
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
                <form className={classes.form} onSubmit={(ev) => setNewPassword(ev)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Set new password</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "email",
                        readOnly: true,
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
                      Set new password
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          {formError && <SnackbarContent type="danger" message={formError} close />}
          {formSuccess && <SnackbarContent type="success" message={formSuccess} close />}
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

PasswordResetHandler.propTypes = {
  history: PropTypes.object,
};
