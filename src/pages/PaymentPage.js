import React from "react";
import { Header } from "../components/BusPage/Header";
import { BookingConfirm } from "../components/PaymentPage/BookingConfirm";
import { Footer } from "../components/HomePage/Footer";

export const PaymentPage = () => {
  return (
    <div>
      <Header />
      <BookingConfirm />
      <Footer />
    </div>
  );
};
