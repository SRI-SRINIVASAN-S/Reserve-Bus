import React from "react";
import { Header } from "../components/HomePage/Header";
import { TravelPlace } from "../components/HomePage/TravelPlace";
import { Achievements } from "../components/HomePage/Achievements";
import { CustomersReview } from "../components/HomePage/CustomerReview";
import { Footer } from "../components/HomePage/Footer";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <TravelPlace />
      <Achievements />
      <CustomersReview />
      <Footer />
    </div>
  );
};
