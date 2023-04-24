import React from "react";
import "./Navbar.css";
import Toogle from "../toogle/Toogle";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Robert</div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
          <button className="button n-button">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
