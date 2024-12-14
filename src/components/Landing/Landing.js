import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/purple_logo.png";
import Footer1 from "../Footer/Footer";
import { Layout, theme } from "antd";
import BannerWeb from "../../asset/images/banner.png";
import RechargeAndBills from "../RechargeAndBills/RechargeAndBills";
import Landing1 from "../../asset/landing1.png";
import Landing2 from "../../asset/landing2.png";
import AboutUs from "../../asset/AboutUs.png";
import Notification from "../Notification/Notification";
const { Content } = Layout;

const Landing = () => {
  const [selectedService, setSelectedService] = useState("Recharge");
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate(); // Initialize navigate

  const handleServiceClick = (service) => setSelectedService(service);
  const handleMoreClick = () => console.log("More services clicked");
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
            {/* <Button
             style={{ background: "#7966FF", color: "white" }}
             onClick={() => alert("Become a Partner")}
           >
             Become Our Partner
           </Button> */}
            <Button
              style={{ border: "2px solid #7966FF", color: "#7966FF" }}
              disabled={false}
              onClick={handleLoginClick} // Handle login button click
            >
              Login
            </Button>
          </div>
        </div>
        <Notification
          message="🚀 Now live: Prepaid Recharge is Live! Other exciting features coming soon. Stay tuned! 🎉"
        />
        <div className="content-container py-8">
          <div className="form-banner-card w-full h-full flex gap-4 px-8 py-7">
            <div className="banner-card w-1/2">
              <img src={BannerWeb} alt="" />
            </div>
            <div className="form-card flex-1 h-full">
              <RechargeAndBills title="Recharge & Pay Bills" />
            </div>
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
          <div class="about-us-details">
            <div class="images-wrapper">
              <img src={Landing2} alt="Image 2" />
              <div class="  ">
                <p>
                  At NextGen Solution, we offer a comprehensive online digital
                  platform for all your prepaid mobile recharge and bill payment
                  needs. From prepaid recharges and postpaid bill payments to
                  DTH, electricity, landline, gas, water, and broadband
                  services, our platform covers it all, providing a seamless and
                  hassle-free experience.
                </p>
              </div>
            </div>
          </div>

          {/* about us */}

          <div className="about-contianer">
            <div className="dash"></div>
            <h2 className="title">About Us</h2>
            <div className="dash"></div>
          </div>
          <div className="nextgen-about-details">
            <div className="about-img-wrapper">
              <img src={AboutUs} alt="About Nextgen Solution" />
            </div>
            <p>
              Nextgen Solution Online Services is one of India’s first multi
              mobile operator, instant pre-paid recharge portals. Nextgen
              Solution Online Services provides recharge service for all major
              prepaid mobile service providers in India. We aim at empowering
              our users by providing quick and convenient prepaid mobile
              recharge as well as DTH recharge. Nextgen Solution Online Services
              is completely reliable in terms of services and security. We at
              Nextgen Solution Online Services believe that customer
              satisfaction should be the primary objective of any successful
              company.
            </p>
          </div>

          {/* Mobile container */}
          <div className="mob-details">
            <div className="dash"></div>
            <h2 className="title">Mobile Recharge</h2>
            <div className="dash"></div>
            <div className="mob-rch-info">
              <img src={Landing1} alt="Image 1" className="img_mobile" />
              <div class="text-wrapper">
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
