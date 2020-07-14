import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";

// import styles from "assets/jss/views/auth/auth.js";
import styles from "./styles";

import image from "assets/img/bg7.jpg";
import { PropTypes } from "prop-types";
// import firebase from "../../components/firebase";
import { authRequired } from "../../utils";
import CustomTabs from "../../components/CustomTabs/CustomTabs";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress";

const useStyles = makeStyles(styles);

export default function Levels(props) {
  authRequired(props.history);

  const { ...rest } = props;
  const classes = useStyles();

  const partsOfSpeech = [
    {
      name: "Verbs",
      levels: [
        { l: 1, p: 100 },
        { l: 2, p: 75 },
        { l: 3, p: 50 },
        { l: 4, p: 25 },
        { l: 5, p: 0 },
        { l: 6, p: 0 },
      ],
    },
    {
      name: "Nouns",
      levels: [
        { l: 1, p: 100 },
        { l: 2, p: 75 },
        { l: 3, p: 50 },
        { l: 4, p: 25 },
        { l: 5, p: 0 },
        { l: 6, p: 0 },
      ],
    },
    {
      name: "Adjectives",
      levels: [
        { l: 1, p: 100 },
        { l: 2, p: 75 },
        { l: 3, p: 50 },
        { l: 4, p: 25 },
        { l: 5, p: 0 },
        { l: 6, p: 0 },
      ],
    },
  ];

  const handleCardClick = (pos, level) => {
    props.history.push(`/play/${pos.toLowerCase()}/${level}`);
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
            <GridItem xs={12} sm={12} md={8}>
              <CustomTabs
                headerColor="primary"
                tabs={partsOfSpeech.map((pos) => ({
                  tabName: pos.name,
                  tabContent: (
                    <div className={classes.flexContainer}>
                      {pos.levels.map((level) => (
                        <Card
                          className={classes.card}
                          variant="outlined"
                          key={`${pos.name}-${level.l}`}
                          onClick={() => handleCardClick(pos.name, level.l)}
                        >
                          <CustomLinearProgress variant="determinate" color="info" value={level.p} className={classes.progress} />
                          <CardContent className={classes.cardContent}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                              {pos.name}
                            </Typography>
                            <Typography variant="h6" component="h2">
                              Level {level.l}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ),
                }))}
              />
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

Levels.propTypes = {
  history: PropTypes.object,
};
