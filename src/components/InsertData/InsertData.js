import React, { Fragment, useState } from "react";
import classes from "./InsertData.module.css";
import TextInput from "../TextInput/TextInput";
import InputDropdown from "../InputDropdown/InputDropdown";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputRadio from "../InputRadio/InputRadio";

const InsertData = () => {
  const [enteredInput, setEnteredInput] = useState({
    enterName: "",
    enterEmail: "",
    enterNumber: "",
    enterAge: "",
    enterGender: "",
    enterCheckbox: "",
    enterRadio: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [bloodGroupError, setBloodGroupError] = useState("");

  const ageOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
  ];

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const nameChangeHandler = (event) => {
    const enterNameValue = event.target.value;
    setEnteredInput({
      ...enteredInput,
      enterName: enterNameValue,
    });
    // console.log(enteredInput);
    let onlyLettersAndSpaces = /^[A-Za-z\s]*$/;
    if (enterNameValue.trim().length === 0) {
      setNameError("Please enter your name!");
    } else if (enterNameValue.trim().length < 4) {
      setNameError("Name minimum 4 character!");
    } else if (!onlyLettersAndSpaces.test(enterNameValue)) {
      setNameError("Please enter only letter!");
    } else {
      setNameError("");
    }
  };

  const emailChangeHandler = (event) => {
    const enteredEmailValue = event.target.value;
    setEnteredInput({
      ...enteredInput,
      enterEmail: enteredEmailValue,
    });
    // console.log(enteredInput.enterEmail);
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (enteredEmailValue.trim().length === 0) {
      setEmailError("Please enter your email address!");
    } else if (!regEx.test(enteredEmailValue)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }
  };

  const numberChangeHandler = (event) => {
    const enterNumberValue = event.target.value;
    setEnteredInput({
      ...enteredInput,
      enterNumber: enterNumberValue,
    });
    // console.log(enteredInput.enterNumber);
    let enterOnlyNumber = /^[0-9\b]+$/;
    if (enterNumberValue.trim().length === 0) {
      setNumberError("Please enter your mobile number!");
    } else if (!enterOnlyNumber.test(enterNumberValue)) {
      setNumberError("Please enter valid number!");
    } else if (
      enterNumberValue.trim().length > 10 ||
      enterNumberValue.trim().length < 10
    ) {
      setNumberError("Please enter 10 digits number!");
    } else {
      setNumberError("");
    }
  };

  const ageChangeHandler = (event) => {
    const enteredAgeValue = event.target.value;
    setEnteredInput((prevEnteredInput) => ({
      ...prevEnteredInput,
      enterAge: enteredAgeValue,
    }));
    setAgeError("");
  };

  const genderChangeHandler = (event) => {
    const enteredGenderValue = event.target.value;
    setEnteredInput((prevEnteredInput) => ({
      ...prevEnteredInput,
      enterGender: enteredGenderValue,
    }));
    setGenderError("");
  };

  const checkboxChangeHandler = () => {
    let checkboxChecked = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (checkboxChecked) {
      setCheckboxError("");
    }
    // console.log(checkboxChecked)
  };

  const bloodGroupChangeHandler = () => {
    let bloodGroupRadio = document.querySelectorAll(
      "input[name='bloodGroup']:checked"
    );
    if (bloodGroupRadio) {
      setBloodGroupError("");
    }
  };

  const formSubmitChangeHandler = (event) => {
    event.preventDefault();

    let checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    let bloodGroup = document.querySelectorAll(
      "input[name='bloodGroup']:checked"
    );

    const checkboxValues = Array.from(checkboxes).map(
      (checkbox) => checkbox.value
    );

    const radioValue = bloodGroup ? bloodGroup.value : "";

    if (nameError) {
      setNameError("Please enter name field!");
      return false;
    } else if (enteredInput.enterName.trim().length === 0) {
      setNameError("Please enter your name!");
      return false;
    } else if (emailError) {
      setEmailError("Please enter email field!");
      return false;
    } else if (enteredInput.enterEmail.trim().length === 0) {
      setEmailError("Please enter your email!");
      return false;
    } else if (numberError) {
      setNumberError("Please enter number field!");
      return false;
    } else if (enteredInput.enterNumber.trim().length === 0) {
      setNumberError("Please enter your number!");
      return false;
    } else if (enteredInput.enterAge.length === 0) {
      setAgeError("Please select your age!");
      return false;
    } else if (enteredInput.enterGender.length === 0) {
      setGenderError("Please select your gender!");
      return false;
    } else if (checkboxes.length === 0) {
      setCheckboxError("Please select at least one checkbox!");
      return false;
    } else if (bloodGroup.length === 0) {
      setBloodGroupError("Please select your blood group!");
      return false;
    } else {
      const userDetails = {
        name: enteredInput.enterName,
        email: enteredInput.enterEmail,
        phone: enteredInput.enterNumber,
        age: enteredInput.enterAge,
        gender: enteredInput.enterGender,
        flat: checkboxValues,
        bloodGroup: radioValue,
      };
      console.log(userDetails);

      setEnteredInput({
        enterName: "",
        enterEmail: "",
        enterNumber: "",
        enterAge: "",
        enterGender: "",
        enterCheckbox: "",
        enterRadio: "",
      });
      return true;
    }
  };

  return (
    <Fragment>
      <div className={classes.box}>
        <form
          onSubmit={formSubmitChangeHandler}
          className={classes["form-submit"]}
        >
          <TextInput
            type="text"
            placeholder="Name"
            name="name"
            id="fullName"
            label="Name"
            onChange={nameChangeHandler}
            value={enteredInput.enterName}
            errorShowMessage={nameError}
          />
          <TextInput
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            label="Email"
            onChange={emailChangeHandler}
            value={enteredInput.enterEmail}
            errorShowMessage={emailError}
          />
          <TextInput
            type="text"
            placeholder="Phone Number"
            name="phone"
            id="phoneNumber"
            label="Phone Number"
            onChange={numberChangeHandler}
            value={enteredInput.enterNumber}
            errorShowMessage={numberError}
          />
          <InputDropdown
            name="age_select"
            id="age_select"
            label="What's Your Age?"
            showSelected="Age"
            options={ageOptions}
            value={enteredInput.enterAge}
            onChange={ageChangeHandler}
            errorShowMessage={ageError}
          />
          <InputDropdown
            name="gender_select"
            id="gender_select"
            label="Either you male or female or other?"
            showSelected="Gender"
            options={genderOptions}
            value={enteredInput.enterGender}
            onChange={genderChangeHandler}
            errorShowMessage={genderError}
          />
          <InputCheckbox
            paraText="Have you live in flat?"
            errorShowMessage={checkboxError}
            onChange={checkboxChangeHandler}
            value={enteredInput.enterCheckbox}
          />
          <InputRadio
            paraText="Blood Group"
            errorShowMessage={bloodGroupError}
            onChange={bloodGroupChangeHandler}
            value={enteredInput.enterRadio}
          />

          <div className={classes["form-btn"]}>
            <input
              type="submit"
              value="Submit"
              className={classes.formSubmit}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default InsertData;
