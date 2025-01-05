import React, { useState } from "react";
import { Layout, theme } from "antd";
import BannerWeb from "../../asset/images/banner_logo.png";
import "./Home.css";
import RechargeAndBills from "../RechargeAndBills/RechargeAndBills";
const { Content } = Layout;

const Home = () => {
  const [selectedService, setSelectedService] = useState("Recharge");
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const handleServiceClick = (service) => setSelectedService(service);
  const handleMoreClick = () => console.log("More services clicked");

  return (
    <>
        {/* <Notification message="🚀 New Features Coming Soon! Stay Updated! 🎉" /> */}
    
    <div className="content-container py-8">
      <div className="form-banner-card w-full h-full flex gap-4 px-8 py-7">
        <div className="banner-card w-1/2">
          <img src={BannerWeb} alt="" />
        </div>
        <div className="form-card flex-1 h-full">
          <RechargeAndBills
            title="Recharge & Pay Bills"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
