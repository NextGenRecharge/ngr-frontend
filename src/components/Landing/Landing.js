import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../../asset/logo.png";
import recharge from "../../asset/recharge.png";
import dth from "../../asset/dth.png";
import Landline from "../../asset/Landline.png";
import Brodband from "../../asset/Brodband.png";
import Fasttag from "../../asset/Fasttag.png";
import Electricity from "../../asset/Electricity.png";
import Cylinder from "../../asset/Cylinder.png";
import more from "../../asset/more.png";
import BannerMobile from "../../asset/BannerMobile.png";
import MobileRecharge from "../MobileRecharge/MobileRecharge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./AboutUsSlider";
import Dth from "../Dth/Dth";
import Footer1 from "../Footer/Footer";
const Landing = () => {

  const navigate = useNavigate(); // Initialize navigate

  const [selectedService, setSelectedService] = useState("Recharge"); // Default to "Recharge"
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore); // Toggle visibility of the more box
  };

  const handleServiceClick = (service) => {
    setSelectedService(service); // Update the selected service
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page when login button is clicked
  };

  return (
    <>
      <div className="container pb-6">
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
              onClick={handleLoginClick} // Handle login button click
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
                  className={`image-item ${
                    selectedService === "Recharge" ? "active" : ""
                  }`}
                  onClick={() => handleServiceClick("Recharge")}
                >
                  <img src={recharge} alt="Recharge" />
                  <span>Recharge</span>
                </div>
                <div
                  className={`image-item ${
                    selectedService === "DTH" ? "active" : ""
                  }`}
                  onClick={() => handleServiceClick("DTH")}
                >
                  <img src={dth} alt="DTH" />
                  <span>DTH</span>
                </div>
                <div
                  className={`image-item ${
                    selectedService === "Landline" ? "active" : ""
                  }`}
                  onClick={() => handleServiceClick("Landline")}
                >
                  <img src={Landline} alt="Landline" />
                  <span>Landline</span>
                </div>
                <div
                  className={`image-item ${
                    selectedService === "Broadband" ? "active" : ""
                  }`}
                  onClick={() => handleServiceClick("Broadband")}
                >
                  <img src={Brodband} alt="Broadband" />
                  <span>Broadband</span>
                </div>
                <div
                  className={`image-item ${
                    selectedService === "Fasttag" ? "active" : ""
                  }`}
                  onClick={() => handleServiceClick("Fasttag")}
                >
                  <img src={Fasttag} alt="Fasttag" />
                  <span>Fasttag</span>
                </div>
                <div
                  className={`image-item ${
                    selectedService === "Electricity" ? "active" : ""
                  }`}
                  onClick={() => handleServiceClick("Electricity")}
                >
                  <img src={Electricity} alt="Electricity" />
                  <span>Electricity</span>
                </div>
                <div
                  className={`image-item ${
                    selectedService === "Cylinder" ? "active" : ""
                  }`}
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
            <img src={BannerMobile} alt="Banner" className="banner-image" />
          </div>
        </div>
      </div>
      <div className="container2 pb-6">
        <div className="about-us">
          <div className="title-contianer">
            <div className="dash"></div>
            <h2 className="title">Who Are We</h2>
            <div className="dash"></div>
          </div>
          <div className="about-us-details">
            <p>
              At NextGen Solution, we offer a comprehensive online digital
              platform for all your prepaid mobile recharge and bill payment
              needs. From prepaid recharges and postpaid bill payments to DTH,
              electricity, landline, gas, water, and broadband services, our
              platform covers it all, providing a seamless and hassle-free
              experience.
            </p>
          </div>
          <div className="slider-container">
            <SimpleSlider />
          </div>

          {/* about us */}

          <div className="about-contianer">
            <div className="dash"></div>
            <h2 className="title">About Us</h2>
            <div className="dash"></div>
          </div>
          <div className="nextgen-about-details">
            <div className="about-one">
              <p>
                NextGen Solution is an emerging digital platform designed to be
                your one-stop destination for all utility payments and mobile
                recharges. As we embark on our journey, our mission is to
                provide a seamless and convenient experience for prepaid mobile
                recharges, bill payments, and various utility services.
              </p>
            </div>
            <div className="about-two">
              <p>
                To kick off our business with added value, we are excited to
                offer an *exclusive up to 39% discount on prepaid recharge
                subscriptions*, helping you save more while staying connected.
                At NextGen Solution, we are committed to delivering reliable,
                cost-effective services, making us your future go-to platform
                for all your utility needs.
              </p>
            </div>
          </div>

          {/* Mobile container */}
          <div className="mob-rch-container">
            <div className="purple-bg"></div>
            <div className="mob-details">
              <div className="mob-rch-title">
                <h2>Mobile Reacharge</h2>
                <div className="dash"></div>
              </div>
              <div className="mob-rch-info">
                <p>
                  At NextGen Solution, we provide online prepaid mobile
                  recharges and bill payments for all major telecom operators.
                  We offer a wide range of talk time and data plans, ensuring
                  you can easily find the best plan to suit your needs while
                  saving time and money. With NextGen Solution, you can recharge
                  and pay bills across all telecom operators seamlessly using
                  Net Banking, Debit Card, Credit Card, UPI, or Wallet
                </p>
              </div>
            </div>
          </div>

          {/* Why next gen container */}
          <div className="why-nxt-container">
            <div className="why-nxt-title">
              <h2>Why Should You Use NextGen Solution </h2>
              <div className="dash"></div>
            </div>
            <div className="why-nxt-info">
              <p>
                NextGen Solution is committed to delivering reliable utility
                services through a user-friendly digital platform, prioritizing
                convenience and efficiency. Our goal is to ensure a seamless
                experience for all your mobile recharges and bill payments,
                making us your trusted choice for all utility needs, time and
                again.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer1 />
      </div>
    </>
  );
};

export default Landing;
