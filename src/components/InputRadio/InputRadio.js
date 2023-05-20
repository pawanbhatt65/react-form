import React, { Fragment } from "react";
import InputCheckboxData from "../InputCheckbox/InputCheckboxData";

import classes from "./InputRadio.module.css";

const InputRadio = (props) => {
  return (
    <Fragment>
      <div className={classes["input-radio"]}>
        <p>{props.paraText}</p>
        <InputCheckboxData
          type="radio"
          name="bloodGroup"
          id="bloodGroupA"
          label="A"
          value={props.value}
          onChange={props.onChange}
        />
        <InputCheckboxData
          type="radio"
          name="bloodGroup"
          id="bloodGroupB"
          label="B"
          value={props.value}
          onChange={props.onChange}
        />
        <InputCheckboxData
          type="radio"
          name="bloodGroup"
          id="bloodGroupO"
          label="O"
          value={props.value}
          onChange={props.onChange}
        />
        {props.errorShowMessage && (
          <p className={classes.error}>{props.errorShowMessage}</p>
        )}
      </div>
    </Fragment>
  );
};

export default InputRadio;
