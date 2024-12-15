import React, { useEffect, useState } from "react";
import "./MyAccount.css"; // Importing styles
import API from "../../../services/apiService";
import { notification } from "antd";

notification.config({
  placement: "top", // Adjust this to 'top', 'bottom', or other placements
});

const MyAccount = () => {
  // State for user details
  const accessToken = localStorage.getItem("accessToken");
  const [user, setUser] = useState({});
console.log(accessToken,"accessToken")
  const getUserDetails = async () => {
    try {
      const payload = {
        clientType: "INDIVIDUAL",
      };
      const response = await API.get(
        "/client/get_details",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Use the token here
          },
        }
      );
      console.log(response, "response");
      if (response.status === 200) {
        console.log(response, "response");
        setUser(response?.data?.response[0]?.personalDetails[0]); // Update the user state with API response
      } else {
        console.log(response, "response");
        notification.error({
          message: "Error",
          description: "Failed to fetch user details.",
          duration: 5,
        });
      }
    } catch (err) {
      notification.error({
        message: "Server Error",
        description: "Unable to fetch user details.",
        duration: 5,
      });
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="center-container">
      <div className="card">
        <div className="avatar"></div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={user.fullName || ""} readOnly />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" id="mobile" value={user.mobileNo || ""} readOnly />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" value={user.emailId || ""} readOnly />
        </div>
        <button className="btn">Update</button>
      </div>
    </div>
  );
};

export default MyAccount;
