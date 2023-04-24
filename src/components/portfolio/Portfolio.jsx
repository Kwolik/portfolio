import React from "react";
import "./Portfolio.css";
import { register } from "swiper/element/bundle";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";
import HOC from "../../img/hoc.png";

import { themeContext } from "../../Context";
import { useContext } from "react";

register();

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //Dopracowac pozniej jeszcze ta sekcje
  return (
    <div className="portfolio">
      {/*  heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <div className="portfolio-slider">
        <swiper-container
          space-between="30"
          slides-per-view="3"
          grab-cursor="true"
        >
          <swiper-slide style={{ width: "20rem" }}>
            <img src={Sidebar} alt="" />
          </swiper-slide>
          <swiper-slide style={{ width: "20rem" }}>
            <img src={Ecommerce} alt="" />
          </swiper-slide>
          <swiper-slide style={{ width: "20rem" }}>
            <img src={MusicApp} alt="" />
          </swiper-slide>
          <swiper-slide style={{ width: "20rem" }}>
            <img src={HOC} alt="" />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};

export default Portfolio;
