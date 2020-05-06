import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
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

export default function PasswordReset(props) {
  const { ...rest } = props;
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const [formSuccess, setFormSuccess] = React.useState("");
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  React.useEffect(() => {
    setCardAnimation("");
  }, []);

  const passwordReset = async (ev) => {
    ev.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      await firebase.passwordReset(email);
      setFormSuccess("Reset email sent, please check your inbox.");
    } catch (error) {
      setFormError(error.message);
      setTimeout(() => setFormError(""), 5000);
    } finally {
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
                <form className={classes.form} onSubmit={(ev) => passwordReset(ev)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Password Reset</h4>
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter} style={{ flexDirection: "column" }}>
                    <Button type="submit" color="primary">
                      Send reset email
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

PasswordReset.propTypes = {
  history: PropTypes.object,
};
