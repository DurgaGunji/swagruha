import React from "react";
import { Box } from "@mui/material";
import './Footer.css';
import flower from "../assets/flower.png"; // Left image (used as background)
import flower1 from '../assets/Isolation_Mode.png'; // Right image
//import design from "../assets/design.png"; // Top design image
//import box from "../assets/box.png";
import pic from "../assets/pic.png";

const Footer = () => {
  return (
    <Box className="body-container_f">
      {/* Top Design */}
     

      {/* Image Section with Anniversary Celebration */}
      <Box className="image-section_f">
        {/* Left side - Anniversary Celebration */}
        <div className="content-container_f">
          <h1 className="anniversary-text_f">
            <span className="year-text_f">30<span className="superscript_f">th</span></span>
            Year <br />
            <span className="celebration-text_f">Anniversary Celebrations</span>
          </h1>
          <p className="description_f">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            <br /> Ipsum has been the industry's standard dummy text ever since the 1500s.
            <br /> has been
          </p>
        </div>

        {/* Right side - Flower1 Image */}
        <Box className="image-flower_f">
          <img src={pic} alt="Right Image" className="right-image_f" />
          {/* Box on top of Flower Image */}
          
        </Box>
      </Box>
    </Box>
  );
};

const MainPage1 = () => {
  return (
    <Box>
      <Footer />
    </Box>
  );
};

export default MainPage1;
