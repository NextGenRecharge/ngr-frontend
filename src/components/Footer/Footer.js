import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import logo from "../../asset/purple_logo.png";
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
          <h1>POLICIES</h1>
          <ul className="footer-menu">
            <hr className="footer-line" />
            <li>
              <Link
                to="/about"
                style={{ color: "black", textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to="/termsCondition">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </li>
            {/* <li>Contact Us</li>
          <li>Help</li> */}
          </ul>
        </div>
        {/* Third Column */}
        <div className="footer-column">
          <h1>Contact Us</h1>
          <hr className="footer-line" />
          <p>Mobile: +91 9172269909</p>
          <p>Email: support@nextgensolution.net.in</p>
          <p>
            Address: Nextgen Solution Online Services Chartha Road, Ankush
            Nagar, Beed, Maharashtra – 431122
          </p>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#7c7373" }}>
      © 2024 NextGen Solution Online Services. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer1;
