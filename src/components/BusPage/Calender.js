import React from "react";
import "../../styles/BusPage/Calender.css";
import DatePicker from "react-horizontal-datepicker";

export const Calender = () => {
  return (
    <div className="Calender-date">
      <DatePicker labelFormat={"MMM"} color={"#03001C"} />
    </div>
  );
};