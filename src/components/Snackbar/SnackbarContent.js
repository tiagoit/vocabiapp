import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
import Close from "@material-ui/icons/Close";

import styles from "assets/jss/ui-kit/components/snackbarContentStyle.js";

const useStyles = makeStyles(styles);

export default function SnackbarContent(props) {
  const { type, message, close } = props;
  const classes = useStyles();
  var action = [];

  const closeAlert = () => setAlert(null);

  if (close !== undefined) {
    action = [
      <IconButton className={classes.iconButton} key="close" aria-label="Close" color="inherit" onClick={closeAlert}>
        <Close className={classes.close} />
      </IconButton>,
    ];
  }

  const icons = {
    info: <Icon className={classes.icon}>info_outline</Icon>,
    success: <Check className={classes.icon} />,
    warning: <Warning className={classes.icon} />,
    danger: <Warning className={classes.icon} />,
  };

  const snackIcon = icons[type];

  let label = type.toUpperCase();
  if (label === "DANGER") label = "ERROR";

  const [alert, setAlert] = React.useState(
    <Snack
      message={
        <div>
          {snackIcon}
          <span>
            <b>{label}: </b>
            {message}
          </span>
          {close !== undefined ? action : null}
        </div>
      }
      classes={{
        root: classes.root + " " + classes[type],
        message: classes.message + " " + classes.container,
      }}
    />
  );
  return alert;
}

SnackbarContent.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  close: PropTypes.bool,
  // color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  // icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

SnackbarContent.defaultProps = {
  type: "info",
};
