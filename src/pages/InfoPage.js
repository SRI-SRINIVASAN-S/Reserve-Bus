import React from "react";
import { Header } from "../components/BusPage/Header";
import { BusFairDetails } from "../components/InfoPage/BusFairDetails";
import { TravellerDetails } from "../components/InfoPage/TravellerDetails";
import { Footer } from "../components/HomePage/Footer";

export const InfoPage = () => {
  return (
    <div>
      <Header />
      <BusFairDetails />
      <TravellerDetails />
      <Footer />
    </div>
  );
};
