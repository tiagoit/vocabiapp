import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "./styles.js";

import image from "assets/img/bg7.jpg";

import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function getWords() {
  return [
    { target: "house", options: ["carro", "casa", "cachorro"], answer: 1 },
    { target: "dog", options: ["engenho", "pássaro", "cachorro"], answer: 2 },
    { target: "waterfall", options: ["cachoeira", "turbante", "gato"], answer: 0 },
  ];
}

export default function Play(props) {
  const { ...rest } = props;
  const classes = makeStyles(styles)();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [activeWord, setActiveWord] = React.useState(0);
  const words = getWords();

  React.useEffect(() => setCardAnimation(""), []);

  const answer = () => {
    if (activeWord === words.length - 1) {
      finish();
    } else {
      setActiveWord((prevActiveWord) => prevActiveWord + 1);
    }
  };

  const finish = () => {
    console.log("finished");
  };

  const next = () => {
    setActiveWord((prevActiveWord) => prevActiveWord + 1);
  };

  const back = () => {
    setActiveWord((prevActiveWord) => prevActiveWord - 1);
  };

  // const handleFinish = () => {
  //   console.log("back");
  // };

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
            <GridItem xs={12} sm={12} md={8}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Verbs &nbsp; | &nbsp; Level 2</h4>
                </CardHeader>
                <CustomLinearProgress variant="determinate" color="info" value={activeWord * 33} className={classes.progress} />
                <CardBody>
                  <Typography className={classes.target} variant="h5" component="h2" color="textSecondary" gutterBottom>
                    {words[activeWord].target.toUpperCase()}
                  </Typography>
                  <div className={classes.options}>
                    {words[activeWord].options.map((option) => (
                      <Button variant="outlined" color="primary" key={option} onClick={answer}>
                        {option}
                      </Button>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className={classes.cardFooter} style={{ flexDirection: "column" }}>
                  <Button
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

Play.propTypes = {
  history: PropTypes.object,
};
