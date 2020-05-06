/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/ui-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block} target="_blank">
                Link 1
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block} target="_blank">
                Link 2
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block} target="_blank">
                Link 3
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block} target="_blank">
                Link 4
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
