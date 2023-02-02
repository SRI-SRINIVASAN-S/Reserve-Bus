import React from "react";
import { Link } from "react-router-dom";
import "../../styles/BusPage/Header.css";
import { FaBus } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

export const Header = () => {
  return (
    <nav className="menu-container">
      <div className="menu">
        <ul>
          <li>
            <FaBus className="BusIcon" />{" "}
            <Link className="link-router" to="/">
              RESERVE
            </Link>
          </li>
          <li>
            <a href="#ticket">Ticket</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#register" className="profile">
              <BsPersonFill /> My Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};