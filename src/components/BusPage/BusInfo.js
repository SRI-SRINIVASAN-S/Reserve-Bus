import React, { useState } from "react";
import "../../styles/BusPage/BusInfo.css";
import { PriceBoarding } from "./PriceBoarding";
import { FcRating } from "react-icons/fc";

export const BusInfo = () => {
  // Used useState to manage the state of btn click
  const [viewSeats, setViewSeats] = useState(false);
  // function called when the btn is clicked
  const handleViewSeats = () => {
    setViewSeats(!viewSeats);
  };
  return (
    <>
      <div className="bus-details">
        <div className="busname-details">
          <h2>
            Intra City Smart Bus <FcRating /> 4.0
          </h2>
        </div>
        <p className="buses-type">
          A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left{" "}
        </p>
        <p>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</p>
        <div className="trip-cost">
          <h4>Trip Cost</h4>
          <h3>$ 899</h3>
        </div>
        <button className="seats-btn" onClick={handleViewSeats}>
          {viewSeats ? "View Seats" : "View Seats"}
        </button>
        {viewSeats && <PriceBoarding />}
      </div>
    </>
  );
};