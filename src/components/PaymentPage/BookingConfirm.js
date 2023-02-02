import React from "react";
import { SiCachet } from "react-icons/si";
import "../../styles/PaymentPage/BookingConfirm.css";
import { BusDetails } from "./BusDetails";

export const BookingConfirm = () => {
  return (
    <>
      <div className="booking-details">
        <SiCachet size={110} className="icon-tick" />
        <h1>Booking has been Confirmed</h1>
        <h3>Ticket ID : 584785ID</h3>
        <h3> Payment ID : 2584-8595-ASED</h3>
        <h3> Passenger Details : Mega Agarwal ,M, 20Yrs </h3>
        <h3> Contact Details : 8056989135</h3>
        <BusDetails />
      </div>
    </>
  );
};
