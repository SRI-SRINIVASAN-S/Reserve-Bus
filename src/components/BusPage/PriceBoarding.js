import React from "react";
import { Link } from "react-router-dom";
import "../../styles/BusPage/PriceBoarding.css";
import { SelectSeat } from "../BusPage/SelectSeat";

export const PriceBoarding = () => {
  return (
    <>
      <hr />
      <h3 className="sets-heading">Select Seats</h3>
      <div className="seats-filters">
        <div className="amount-filter">
          <h3>Seat Price </h3>
          <input type="radio" id="All" name="All" value=""></input>
          <label htmlFor="All">All</label>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <input type="radio" id="1200" name="1200" value=""></input>
          <label htmlFor="1200"> $1200</label>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <input type="radio" id="900" name="900" value=""></input>
          <label htmlFor="900">$900</label>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <input type="radio" id="750" name="750" value=""></input>
          <label htmlFor="750">$750</label>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <input type="radio" id="600" name="600" value=""></input>
          <label htmlFor="600">$600</label>
        </div>
      </div>

      <div className="Boarding">
        <h3>
          <b> Bording & Dropping</b>
        </h3>
        <h4>Cheenai</h4>
        <p>
          Central Rail station | Cheenai
          <span className="Boarding-time">22:45</span>
        </p>
        <h4>Bangalore</h4>
        <p>
          Mysore | Bangalore <span className="Boarding-time">06:20</span>
        </p>
        <hr />
        <h4>
          Serial No: <span className="Boarding-time">7</span>
        </h4>
        <hr />
        <h4>Fair Details</h4>
        <h3>
          Amount <span className="Boarding-time">INR 750.0</span>
        </h3>
        <p>Includes all fair charges</p>
        <button className="payment-button">
          <Link to="./InfoPage" className="payment-btn-color">Proceed To Book</Link>
        </button>
      </div>
      <SelectSeat />
    </>
  );
};
