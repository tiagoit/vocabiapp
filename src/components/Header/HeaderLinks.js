/*eslint-disable*/
import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PersonIcon from "@material-ui/icons/Person";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/ui-kit/components/headerLinksStyle.js";

import firebase from "../firebase";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
  return (
    <List className={classes.list}>
      {firebase.getCurrentUsername() && (
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink} onClick={() => props.history.push("/profile")}>
            <PersonIcon className={classes.icons} /> {firebase.getCurrentUsername()}
          </Button>
        </ListItem>
      )}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a href="https://creativetimofficial.github.io/ui-kit/#/documentation?ref=mkr-navbar" target="_blank" className={classes.dropdownLink}>
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim" target="_blank" className={classes.navLink}>
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      {!firebase.getCurrentUsername() && (
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink} onClick={() => props.history.push("/login")}>
            <LockOpenIcon className={classes.icons} /> Login
          </Button>
        </ListItem>
      )}
      {firebase.getCurrentUsername() && (
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink} onClick={logout}>
            <LockIcon className={classes.icons} /> Logout
          </Button>
        </ListItem>
      )}
    </List>
  );
}
