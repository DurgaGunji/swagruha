import React from "react";
import { Box } from "@mui/material";
import './Body.css';
import arc from '../assets/arc.svg'; // Right image
import box from "../assets/box.png";

const Body = () => {
  return (
   
    <Box className="body-container">
    
      {/* Top Design */}
      <Box className="top-design" />

      {/* Image Section with Anniversary Celebration */}
      <Box className="image-section">
        {/* Left side - Anniversary Celebration */}
        <div className="content-container">
          <h1 className="anniversary-text">
            <span className="year-text">30<span className="superscript">th</span></span>
            Year <br />
            <span className="celebration-text">Anniversary Celebrations</span>
          </h1>
          <p className="description">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            <br /> Ipsum has been the industry's standard dummy text ever since the 1500s.
            <br /> has been
          </p>
        </div>

        {/* Right side - Flower1 Image */}
        <Box className="image-flower">
          <img src={arc} alt="Right Image" className="right-image" />
          {/* Box on top of Flower Image */}
          <Box className="box-on-flower">
            <img src={box} alt="Box Image" className="box-image" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const MainPage = () => {
  return (
    <Box>
      <Body />
    </Box>
  );
};

export default MainPage;
