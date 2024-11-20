import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Input } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import logo from "../../asset/logo.png";
import Footer1 from "../Footer/Footer";
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
import Dth from "../Dth/Dth";
import SimpleSlider from "../Landing/AboutUsSlider";
import "./Home.css";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const items = [
  { key: "1", label: "Home" },
  { key: "2", label: "Dashboard" },
  { key: "3", label: "Subscription Plan" },
  { key: "4", label: "Become Partner" },
];

const Home = () => {
  const [selectedService, setSelectedService] = useState("Recharge");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleServiceClick = (service) => setSelectedService(service);
  const handleMoreClick = () => console.log("More services clicked");

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#551a94",
        }}
      >
        <img src={logo} alt="Logo" className="header-logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, backgroundColor: "#551a94" }}
        />

        <div className="header-icons">
          <Search
            placeholder="Search"
            style={{ width: 200, marginRight: "10px" }}
          />
          <ShareAltOutlined
            className="header-icon"
            style={{ fontSize: "20px", marginRight: "10px", color: "white" }}
          />
          <UserOutlined
            className="header-icon"
            style={{ fontSize: "20px", color: "white" }}
          />
        </div>
      </Header>

      <Content style={{ padding: "0px" }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}

<div className="content-container" style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
  <div className="box-container">
    {/* Image (left box) */}
    <div className="left-boxx">
      <img src={BannerMobile} alt="Banner" className="banner-image" />
    </div>

    {/* Right container with box1 and box2 */}
    <div className="right-boxx">
      <div className="box1">
        <div className="image-grid">
          {['Recharge', 'DTH', 'Landline', 'Broadband', 'Fasttag', 'Electricity', 'Cylinder'].map((service) => (
            <div
              key={service}
              className={`image-item ${selectedService === service ? 'active' : ''}`}
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={{
                  Recharge: recharge,
                  DTH: dth,
                  Landline: Landline,
                  Broadband: Brodband,
                  Fasttag: Fasttag,
                  Electricity: Electricity,
                  Cylinder: Cylinder,
                }[service]}
                alt={service}
              />
              <span>{service}</span>
            </div>
          ))}
          <div className="image-item more" onClick={handleMoreClick}>
            <span className="image-circle">
              <img src={more} alt="more" />
            </span>
            <span>More</span>
          </div>
        </div>
      </div>

      <div className="box2">
        {selectedService === 'Recharge' && <MobileRecharge />}
        {selectedService === 'DTH' && <Dth />}
      </div>
    </div>
  </div>
</div>

      </Content>

      <Footer style={{ textAlign: "center" }}>
        <Footer1 />
      </Footer>
    </Layout>
  );
};

export default Home;
