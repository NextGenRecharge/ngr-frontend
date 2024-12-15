import React, { useState } from "react";
import { Layout, theme } from "antd";
import recharge from "../../asset/recharge.png";
import dth from "../../asset/dth.png";
import Landline from "../../asset/Landline.png";
import Brodband from "../../asset/Brodband.png";
import Fasttag from "../../asset/Fasttag.png";
import Electricity from "../../asset/Electricity.png";
import Cylinder from "../../asset/Cylinder.png";
import more from "../../asset/more.png";
import BannerMobile from "../../asset/BannerMobile.png";
import BannerWeb from "../../asset/images/banner_logo.png";
import MobileRecharge from "../MobileRecharge/MobileRecharge";
import Dth from "../Dth/Dth";
import "./Home.css";
import RechargeAndBills from "../RechargeAndBills/RechargeAndBills";
import Notification from "../Notification/Notification";
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
