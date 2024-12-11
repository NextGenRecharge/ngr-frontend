import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import logo from "../../asset/logo.png";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* First Column */}
      <div className="footer-column">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      {/* Second Column */}
      <div className="footer-column">
        <h1>Menu</h1>
        <ul className="footer-menu">
          <hr className="footer-line" />
          <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link></li>
          <li><Link to="/termsCondition">Terms & Conditions</Link></li>
          <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
          {/* <li>Contact Us</li>
          <li>Help</li> */}
        </ul>
      </div>
      {/* Third Column */}
      <div className="footer-column">
        <h1>Contact Us</h1>
        <hr className="footer-line" />
        <p>Mobile: +123 456 7890</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer1;
