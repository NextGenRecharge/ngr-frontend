import React, { useEffect, useState } from "react";
import "./MyAccount.css"; // Importing styles
import API from "../../../services/apiService";
import { notification } from "antd";

notification.config({
  placement: "top",
});

const MyAccount = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [user, setUser] = useState({});
  const [bankAccount, setBankAccount] = useState("");
  const [ifsc, setIfsc] = useState("");

  // Fetch user details
  const getUserDetails = async () => {
    try {
      const response = await API.get("/client/get_details", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        const userDetails = response?.data?.response[0]?.personalDetails[0];
        setUser(userDetails);
        setBankAccount(userDetails.bankAccount || ""); // Set bank account state
        setIfsc(userDetails.ifsc || ""); // Set IFSC code state
      } else {
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

  // Update bank account and IFSC details
  const updateDetails = async () => {
    try {
      const payload = {
        bankAccount,
        ifsc,
      };
      const response = await API.put(
        "/client/update_details",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Details updated successfully.",
          duration: 5,
        });
        getUserDetails(); // Refresh user details
      } else {
        notification.error({
          message: "Error",
          description: "Failed to update details.",
          duration: 5,
        });
      }
    } catch (err) {
      notification.error({
        message: "Server Error",
        description: "Unable to update details.",
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
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={user.fullName || ""} readOnly />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" id="mobile" value={user.mobileNumber || ""} readOnly />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" value={user.emailId || ""} readOnly />
        </div>
        <div className="input-group">
          <label htmlFor="bankaccount">Bank Account Number</label>
          <input
            type="number"
            id="bankaccount"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="ifsc">IFSC Code</label>
          <input
            type="text"
            id="ifsc"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
          />
        </div>
        <button className="btn" onClick={updateDetails}>
          Update
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
