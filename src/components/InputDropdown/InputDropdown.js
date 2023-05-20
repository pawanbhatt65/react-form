import React, { Fragment } from "react";
import classes from "./InputDropdown.module.css";

const InputDropdown = (props) => {
  const { name, id, label, options, showSelected, value, onChange,errorShowMessage } =
    props;

  return (
    <Fragment>
      <div className={classes["dropdown-box"]}>
        <label htmlFor={id}>{label}</label>
        <select name={name} id={id} value={value} onChange={onChange}>
          <option value="" disabled>
            {showSelected}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errorShowMessage&& <p className={classes.errorMessage}>{errorShowMessage}</p>}
      </div>
    </Fragment>
  );
};

export default InputDropdown;
