import React from "react";
import { Link } from "react-router-dom";
import "../../styles/HomePage/Header.css";
import { FaBus } from "react-icons/fa";

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
            <Link to="./BusPage">Ticket</Link>
          </li>
          <li>
            <a href="#Contacts">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="./LoginPage">Login</Link>
          </li>
          <li>
            <Link to="/RegisterPage">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};