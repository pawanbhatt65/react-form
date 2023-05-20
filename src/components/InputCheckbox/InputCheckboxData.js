import React, { Fragment } from "react";

const InputCheckboxData = (props) => {
  return (
    <Fragment>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </Fragment>
  );
};

export default InputCheckboxData;
