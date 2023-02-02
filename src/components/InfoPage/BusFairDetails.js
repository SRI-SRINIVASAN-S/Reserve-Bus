import React from "react";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../../styles/InfoPage/BusFairDetails.css";

export const BusFairDetails = () => {
  return (
    <>
      <div className="buses-details">
        <div className="busesname_details">
          <h2>
            Intra City Smart Bus <FcRating /> 4.0
          </h2>
        </div>
        <p>A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left </p>
        <h3 className="timing">
          22:45 ,16 Jan<span> &nbsp; </span> <HiOutlineArrowNarrowRight />{" "}
          <span> &nbsp; </span>07hrs 50min<span> &nbsp; </span>{" "}
          <HiOutlineArrowNarrowRight /> 06:20, 17 Jan
        </h3>
        <div className="place">
          <h3 className="place-from">Cheenai </h3>
          <h3 className="place-to"> Bangalore</h3>
        </div>
      </div>
      <div className="fair-details">
        <h3>Fair Details </h3>
        <h4>
          Base Fair <span className="fair-amount">INR 800.0</span>
        </h4>
        <h4>
          Tax <span className="fair-amount">INR 50</span>
        </h4>
        <h4>
          Other Applied <span className="fair-amount">INR 50</span>
        </h4>
        <hr />
        <h3>
          Total Price <span className="fair-amount">INR 900</span>
        </h3>
        <button className="payment-btn">
          <Link to="./PaymentPage" className="payment-btn-color">
            Proceed To Book
          </Link>
        </button>
      </div>
    </>
  );
};