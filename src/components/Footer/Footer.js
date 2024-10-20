import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import logo from "../../asset/logo.png";

const Footer = () => {
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
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Apply for Franchise</li>
            <li>Contact Us</li>
            <li>Help</li>
          </ul>
        </div>
        {/* Third Column */}
        <div className="footer-column">
          <h2>Contact Us</h2>
          <hr className="footer-line" />
          <p>Mobile: +123 456 7890</p>
          <p>Email: info@example.com</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
