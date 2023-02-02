import React from "react";
import { Filters } from "../BusPage/Filters";
import "../../styles/BusPage/Filters.css";
import { BusInfo } from "./BusInfo";
import "../../styles/BusPage/BusInfo.css";
import { Calender } from "../BusPage/Calender";
import "../../styles/BusPage/Calender.css";
import "../../styles/BusPage/Content.css";

export const Content = () => {
  return (
    <div className="parent-content">
      <div className="child-content-one">
        <Filters />
      </div>
      <div className="child-content-two">
        <Calender />
        <BusInfo />
        <BusInfo />
        <BusInfo />
        <BusInfo />
        <BusInfo />
        <BusInfo />
        <BusInfo />
        <BusInfo />
      </div>
    </div>
  );
};