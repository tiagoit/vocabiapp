import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

import styles from "assets/jss/ui-kit/components/customSelectStyle.js";

const useStyles = makeStyles(styles);

export default function CustomSelect(props) {
  const classes = useStyles();
  const { formControlProps, labelText, id, labelProps, inputProps, error, success, options } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });

  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classNames(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel className={classes.labelRoot + " " + labelClasses} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      <NativeSelect
        classes={{
          select: classes.select,
          root: classes.nativeSelectRoot,
          disabled: classes.disabled,
        }}
        id={id}
        {...inputProps}
      >
        <option aria-label="None" value="" />
        {options.map((op) => (
          <option value={op.value} key={op.value}>
            {op.label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

CustomSelect.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
};
