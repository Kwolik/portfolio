import React from "react";
import "./Services.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../card/Card";
import Resume from "./Resume.pdf";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ipsum <br /> Lorem ipsum
        </spane>
        <a href={Resume} download>
          {/* Podmienić potem na CV */}
          <button className="button s-button"> Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail="Figma, Sketch, Photoshop, Adobe, Adobe XD"
          />
        </div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail="Html, Css, Javascript, React, React Native"
          />
        </div>

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail="Lorem ipsum dummy text are"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
