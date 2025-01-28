import React from "react";
import {
  MessageOutlined,
  MailOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "./HelpSupport.css"; // Import the CSS file

const HelpSupport = () => {
  return (
    <div className="help-support-container">
      <div className="footer-column">
        <h1 className="footer-heading">Contact Us</h1>
        <hr className="footer-line" />
        <p className="footer-item">
          <ContactsOutlined className="footer-icon" />
          +91 9172269909
        </p>
        <p className="footer-item">
          <MailOutlined className="footer-icon" />
          <a href="mailto:support@nextgensuperapp.com" className="email-link">
            support@nextgensuperapp.com
          </a>
        </p>
        <p className="footer-item">
          <MessageOutlined className="footer-icon" />
          Nextgen Solution Online Services, Chartha Road, Ankush Nagar, Beed, Maharashtra – 431122
        </p>
      </div>
    </div>
  );
};

export default HelpSupport;
