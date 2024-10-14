import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Login.css";
import logo from "../../asset/logo.png";
import recharge from "../../asset/recharge.png";
import dth from "../../asset/dth.png";
import Landline from "../../asset/Landline.png";
import Brodband from "../../asset/Brodband.png";
import Fasttag from "../../asset/Fasttag.png";
import Electricity from "../../asset/Electricity.png";
import Cylinder from "../../asset/Cylinder.png";
import more from "../../asset/more.png";
import BannerMobile from "../../asset/BannerMobile.png"
import MobileRecharge from "../MobileRecharge/MobileRecharge";
import Dth from "../Dth/Dth";

const Landing = () => {
  const [selectedService, setSelectedService] = useState("Recharge"); // Default to "Recharge"
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore); // Toggle visibility of the more box
  };

  const handleServiceClick = (service) => {
    setSelectedService(service); // Update the selected service
  };

  return (
    <div className="container">
      <div className="logo-container">
        <div className="logoButton">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <div className="button-group">
          <Button
            style={{ background: "#7966FF", color: "white" }}
            onClick={() => alert("Become a Partner")}
          >
            Become Our Partner
          </Button>
          <Button
            style={{ border: "2px solid #7966FF", color: "#7966FF" }}
            disabled={false}
          >
            Login
          </Button>
        </div>
      </div>
      <div className="box-container">
        <div className="left-box">
          <div className="box1">
            <div className="image-grid">
              <div
                className={`image-item ${selectedService === "Recharge" ? "active" : ""}`}
                onClick={() => handleServiceClick("Recharge")}
              >
                <img src={recharge} alt="Recharge" />
                <span>Recharge</span>
              </div>
              <div
                className={`image-item ${selectedService === "DTH" ? "active" : ""}`}
                onClick={() => handleServiceClick("DTH")}
              >
                <img src={dth} alt="DTH" />
                <span>DTH</span>
              </div>
              <div
                className={`image-item ${selectedService === "Landline" ? "active" : ""}`}
                onClick={() => handleServiceClick("Landline")}
              >
                <img src={Landline} alt="Landline" />
                <span>Landline</span>
              </div>
              <div
                className={`image-item ${selectedService === "Broadband" ? "active" : ""}`}
                onClick={() => handleServiceClick("Broadband")}
              >
                <img src={Brodband} alt="Broadband" />
                <span>Broadband</span>
              </div>
              <div
                className={`image-item ${selectedService === "Fasttag" ? "active" : ""}`}
                onClick={() => handleServiceClick("Fasttag")}
              >
                <img src={Fasttag} alt="Fasttag" />
                <span>Fasttag</span>
              </div>
              <div
                className={`image-item ${selectedService === "Electricity" ? "active" : ""}`}
                onClick={() => handleServiceClick("Electricity")}
              >
                <img src={Electricity} alt="Electricity" />
                <span>Electricity</span>
              </div>
              <div
                className={`image-item ${selectedService === "Cylinder" ? "active" : ""}`}
                onClick={() => handleServiceClick("Cylinder")}
              >
                <img src={Cylinder} alt="Cylinder" />
                <span>Cylinder</span>
              </div>
              <div className="image-item more" onClick={handleMoreClick}>
                <span className="image-circle">
                  <img src={more} alt="more" />
                </span>
                <span>More</span>
              </div>
            </div>
          </div>
          <div className="box2">
            {selectedService === "Recharge" && <MobileRecharge />}
            {selectedService === "DTH" && <Dth />}
            {/* You can add more conditionals here for other services if needed */}
          </div>
        </div>
        <div className="right-box">
        <img src={BannerMobile} alt="Electricity" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
