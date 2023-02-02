import React from "react";
import "../../styles/HomePage/CustomerReview.css";
import { FcRating } from "react-icons/fc";

export const CustomersReview = () => {
  return (
    <>
      <div className="head">
        <p className="customers-review-heading">
          Here's what a few of our customers
          <br />
          have to say about us
        </p>
      </div>
      <div className="customers_list">
        <ul>
          <li className="card_customers">
            <h3 className="customer_name">Vatsal Agrawal</h3>
            <h6 className="customer_since">Customer Since 2020</h6>
            <FcRating /> 4.5
            <p className="customer_review">
              Awesome travel experience with reserve Excellent staff.
            </p>
          </li>
          <li className="card_customers">
            <h3 className="customer_name">Vanya Agrawal</h3>
            <h6 className="customer_since">Customer Since 2019</h6>
            <FcRating /> 4.0
            <p className="customer_review">
              Amazing service.Always a best time with reserve
            </p>
          </li>
          <li className="card_customers">
            <h3 className="customer_name">Seema Agrawal</h3>
            <h6 className="customer_since">Customer Since 2018</h6>
            <FcRating /> 3.9
            <p className="customer_review">
              Bus was clean and the journey was smooth.
              <br />
              Reached on time.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};