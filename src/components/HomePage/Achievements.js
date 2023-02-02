import React from "react";
import "../../styles/HomePage/Achievements.css";

export const Achievements = () => {
  return (
    <>
      <div>
        <p className="heading">Travel With World Largest Bus</p>
      </div>
      <div className="small_images">
        <ul>
          <li className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOXq2oM-WFK28T4j_iczCJP7kANmLjIWSjg&usqp=CAU"
              alt="img"
              height={180}
              width={300}
            />
            <h5>2000+</h5>
            <p className="small_heading_one">Bus Collections</p>
          </li>
          <li className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQapMyXyM_6PIWFXSbfpNYWBCNfE4tU8F_caqa3mSqGUnW0JXgFVHNFjKyAXM87gZhzg&usqp=CAU"
              alt="img"
              height={180}
              width={300}
            />
            <h5>20 Millions</h5>
            <p className="small_heading_one">Happy Customers Globally</p>
          </li>
          <li className="card">
            <img
              src="https://media.istockphoto.com/id/914450732/vector/five-stars-rating-flat-isometric-vector-concept.jpg?s=612x612&w=0&k=20&c=kaKiYsBFIzDbFXA5HyYZA9qdYGph0D_UudNY-cVqfis="
              alt="img"
              height={180}
              width={300}
            />
            <h5>5000+</h5>
            <p className="small_heading_one">Tickets Booking Everyday</p>
          </li>
        </ul>
      </div>
    </>
  );
};