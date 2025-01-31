import React, { useEffect, useState } from "react";
import "./MyAccount.css"; // Importing styles
import API from "../../../services/apiService";
import { Card, Avatar, Typography, Divider, notification } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

notification.config({
  placement: "top",
});

const MyAccount = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [user, setUser] = useState({});
  const [bankAccount, setBankAccount] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankDetails, setBankDetails] = useState("");
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
        accountNumber: bankAccount,
        ifscCode: ifsc,
        accountHolder: accountHolderName,
        primaryBank: "",
      };
      const response = await API.post(
        "/client/bank/submit_details",
        { payload: [payload] },
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

  const getBankDetails = async () => {
    try {
      const response = await API.get("/client/bank/get_list", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200) {
        const bankDetails = response.data?.response[0]?.bankDetails[0];
        setBankDetails(bankDetails);
        console.log("Bank Details:", bankDetails);
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

  useEffect(() => {
    getUserDetails();
    getBankDetails();
  }, []);

  return (
    <>
      <div style={{  padding: 20 }}>
        <Card
          style={{ width: 300, borderRadius: 12, backgroundColor: "#f9f0ff" }}
          bodyStyle={{ padding: 20 }}
        >
          {/* Header Section */}
          <div style={{ textAlign: "center", display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <Avatar
              size={80}
              icon={<UserOutlined />}
              style={{ backgroundColor: "#87d068", marginBottom: 10 }}
            />
            <Title level={3} style={{ margin: 0 }}>
              Hi {user.clientName}
            </Title>
          </div>

          {/* User Information */}
          <div style={{ marginTop: 20 }}>
            <Text strong>
              <MailOutlined /> Email: {user?.emailId}
            </Text>
            <br />
            <Text strong>
              <PhoneOutlined /> Mobile: {user.mobileNumber || ""}
            </Text>
            <br />
            <Text strong>
              Refer Code: <span style={{ color: "#9254de" }}>{user?.referCode||""}</span>
            </Text>
          </div>

          <Divider />

          {/* Subscription Section */}
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <Card
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 12,
                border: "1px solid #d3adf7",
              }}
              bodyStyle={{ padding: 15 }}
            >
              <Text strong>Your Subscription is valid till</Text>
              <Title level={4} style={{ margin: 0 }}>
                29/08/2025
              </Title>
            </Card>
          </div>
        </Card>
      </div>
      <div className="center-container">
        <div className="card">
          {/* <div className="input-group-row">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={user.clientName || ""}
                readOnly
              />
            </div>
            <div className="input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                value={user.mobileNumber || ""}
                readOnly
              />
            </div>
          </div> */}
          {/* <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              value={user.emailId || ""}
              readOnly
            />
          </div> */}
          <span style={{fontWeight:700, fontFamily:"sans-serif", fontSize:16}}>Please Update Your Bank Details</span>
          <div className="input-group">
            <label htmlFor="accountHolder">Account Holder Name</label>
            <input
              type="text"
              id="accountHolder"
              value={bankDetails?.accountHolder}
              onChange={(e) => setAccountHolderName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="bankaccount">Bank Account Number</label>
            <input
              type="number"
              id="bankaccount"
              value={bankDetails?.accountNumber}
              onChange={(e) => setBankAccount(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="ifsc">IFSC Code</label>
            <input
              type="text"
              id="ifsc"
              value={bankDetails?.ifsCode}
              onChange={(e) => setIfsc(e.target.value)}
            />
          </div>
          <button className="btn" onClick={updateDetails}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
