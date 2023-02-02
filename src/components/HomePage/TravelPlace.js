import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/HomePage/TravelPlace.css";

export const TravelPlace = () => {
  const [userSelectedFromPlace, setUserSelectedFromPlace] = useState("");
  const [userSelectedToPlace, setUserSelectedToPlace] = useState("");
  //This is the function which is used to handle the user event.
  const userFromPlace = (event) => {
    setUserSelectedFromPlace(event.target.value);
  };
  const userToPlace = (event) => {
    setUserSelectedToPlace(event.target.value);
  };
  return (
    <>
      <div className="background_img">
        <img
          src={
            "https://www.mercedes-benz-bus.com/content/dam/mbo/markets/common/models/tourismo-rhd/images/stage/tourismo-rhd-stage.jpg"
          }
          alt="bus_img"
          height={600}
          width={1700}
        />
      </div>
      <section className="travel_place">
        <form action="">
          <label htmlFor="from-place">From </label>
          <select
            id="from-place"
            name="from"
            value={userSelectedFromPlace}
            onChange={userFromPlace}
          >
            <option value="Mumbai"></option>
            <option value="Mumbai">Maharashtra,Mumbai</option>
            <option value="Chennai">Chennai,TamilNadu</option>
            <option value="Bangalore">Bangalore,Karnataka</option>
            <option value="Delhi">RedFort,Delhi</option>
          </select>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <label htmlFor="to-place">To </label>
          <select
            id="to-place"
            name="to"
            value={userSelectedToPlace}
            onChange={userToPlace}
          >
            {" "}
            <option value="Mumbai"></option>
            <option value="Mumbai">Maharashtra,Mumbai</option>
            <option value="Chennai">Chennai,TamilNadu</option>
            <option value="Bangalore">Bangalore,Karnataka</option>
            <option value="Delhi">RedFort,Delhi</option>
          </select>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <label htmlFor="calender">Travel Date </label>
          <input type="date" id="calender" name="calender"></input>
        </form>
        <button className="search_btn">
          <Link to="./BusPage">Search</Link>
        </button>
      </section>
    </>
  );
};