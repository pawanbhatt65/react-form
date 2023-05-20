import React, { Fragment } from "react";
import classes from "./InputCheckbox.module.css";
import InputCheckboxData from "./InputCheckboxData";

const InputCheckbox = (props) => {
  return (
    <Fragment>
      <div className={classes["input-checkbox"]}>
        <p>{props.paraText}</p>
        <InputCheckboxData
          label="1"
          id="oneCheckbox"
          name="oneCheckbox"
          type="checkbox"
          onChange={props.onChange}
          value={props.value}
        />
        <InputCheckboxData
          label="2"
          id="twoCheckbox"
          name="twoCheckbox"
          type="checkbox"
          onChange={props.onChange}
          value={props.value}
        />
        <InputCheckboxData
          label="3"
          id="threeCheckbox"
          name="threeCheckbox"
          type="checkbox"
          onChange={props.onChange}
          value={props.value}
        />
        <InputCheckboxData
          label="4"
          id="fourCheckbox"
          name="fourCheckbox"
          type="checkbox"
          onChange={props.onChange}
          value={props.value}
        />
        {props.errorShowMessage && (
          <p className={classes.error}>{props.errorShowMessage}</p>
        )}
      </div>
    </Fragment>
  );
};

export default InputCheckbox;
