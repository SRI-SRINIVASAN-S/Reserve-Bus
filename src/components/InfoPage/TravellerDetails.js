import React, { useState } from "react";
import "../../styles/InfoPage/TravellerDetails.css";

export const TravellerDetails = () => {
  // Here is have used useState to handle the state of the forms.
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  // This are the Functions which is used to called while onChange in forms state.
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const mobileNumberChangeHandler = (event) => {
    setEnteredMobileNumber(event.target.value);
  };
  return (
    <>
      <div className="traveller-details">
        <h2> Enter Traveller Details</h2>
        <h4 className="Passenger-info">
          Passenger 1 <span> &nbsp; </span> Seat 18
        </h4>
        <form htmlFor="TravellerDetails" action="">
          <div htmlFor="TravellerDetails" className="forms">
            <label htmlFor="TravellerName" className="form-heading-one">
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              size={30}
              value={enteredName}
              onChange={nameChangeHandler}
              className="form-space"
            />
            <label htmlFor="TravellerGender" className="form-heading-one">
              Gender
            </label>
            <select id="genders" name="genders">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label htmlFor="TravellerAge" className="form-heading-one">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              size={30}
              value={enteredAge}
              onChange={ageChangeHandler}
              className="form-space"
            />
          </div>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <div htmlFor="TravellerDetails" className="forms">
            <label htmlFor="TravellerEmail" className="form-heading-one">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              size={27}
              value={enteredEmail}
              onChange={emailChangeHandler}
              className="form-space"
            />
            <label htmlFor="TravellerMobileNumber" className="form-heading-one">
              Mobile No
            </label>
            <input
              type="number"
              id="mobilenumber"
              name="Name"
              size={27}
              value={enteredMobileNumber}
              onChange={mobileNumberChangeHandler}
              className="form-space"
            />
          </div>
        </form>
      </div>
    </>
  );
};