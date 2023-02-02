import React from "react";
import "../../styles/BusPage/SelectSeat.css";

export const SelectSeat = () => {
  return (
    <>
      {/* Upper Seat */}
      <p className="seat-position">Upper Seat</p>
      <div className="grid-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="down-seat"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Lower Seats  */}
      <p className="seat-position">Lower Seat</p>
      <div className="grid-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="down-seat"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};