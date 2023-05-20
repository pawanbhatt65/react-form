import React, { Fragment } from "react";
import classes from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <Fragment>
      <div className={classes["text-input"]}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
        {props.errorShowMessage && <p className={classes.errorMessage}>{props.errorShowMessage}</p>}
      </div>
    </Fragment>
  );
};

export default TextInput;
