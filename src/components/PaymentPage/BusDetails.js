import React from "react";
import { FcRating } from "react-icons/fc";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../../styles/PaymentPage/BusDetails.css";

export const BusDetails = () => {
  return (
    <>
      <div className="trip-details-one">
        <div className="trip-details-two">
          <h2>
            Intra City Smart Bus <FcRating /> 4.0
          </h2>
        </div>
        <p className="bus-type">
          A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left{" "}
        </p>
        <h3 className="timing">
          22:45 ,16 Jan<span> &nbsp; </span> <HiOutlineArrowNarrowRight />
          <span> &nbsp; </span>07hrs 50min<span> &nbsp; </span>
          <HiOutlineArrowNarrowRight /> 06:20, 17 Jan
        </h3>
        <div className="places">
          <h3 className="place-from">Cheenai </h3>
          <h3 className="place-to"> Bangalore</h3>
        </div>
      </div>
    </>
  );
};