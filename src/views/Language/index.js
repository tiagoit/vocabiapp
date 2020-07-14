import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import CustomSelect from "components/CustomSelect/CustomSelect.js";

import styles from "assets/jss/views/auth/auth.js";

import image from "assets/img/bg7.jpg";
import { PropTypes } from "prop-types";
import firebase from "../../components/firebase";
import { authRequired } from "../../utils";

const useStyles = makeStyles(styles);

export default function Language(props) {
  authRequired(props.history);

  const { ...rest } = props;
  const classes = useStyles();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [source, setSource] = React.useState("");
  const [target, setTarget] = React.useState("");

  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "pt", label: "Portuguese" },
  ];

  React.useEffect(() => setCardAnimation(""), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source || !target || source === target) return;
    firebase.db.collection("users").doc(`${firebase.auth.currentUser.uid}`).update({ source, target });
    props.history.push("/play");
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
                <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Language</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomSelect
                      id="source"
                      labelText="I speak..."
                      options={languages}
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        value: source,
                        autoFocus: true,
                        onChange: (e) => setSource(e.target.value),
                      }}
                    />

                    <CustomSelect
                      id="target"
                      labelText="Improve my vocabulary on..."
                      options={languages}
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        value: target,
                        onChange: (e) => setTarget(e.target.value),
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple type="submit" color="primary" size="lg">
                      Let{"'"}s do it
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

Language.propTypes = {
  history: PropTypes.object,
};
