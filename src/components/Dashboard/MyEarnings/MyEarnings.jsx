import React from "react";
import "./MyEarnings.css";

const MyEarnings = () => {
  const earningsData = [
    { title: "Total Earnings", amount: "₹ 1999" },
    { title: "Rewards Earned", amount: "₹ 1500" },
    { title: "Available to Withdraw", amount: "₹ 499" },
  ];

  const transactions = [
    {
      type: "Cashback Credit",
      date: "09/11/2024",
      amount: "₹ 19.00",
      description: "Mobile Recharge 9876543220",
      status: "success", // success for green tick, fail for red arrow
    },
    {
      type: "Cashback Credit",
      date: "09/11/2024",
      amount: "₹ 10.00",
      description: "Electricity Bill Payment MH9876",
      status: "success",
    },
    {
      type: "Cashback Debit",
      date: "09/11/2024",
      amount: "₹ 50.00",
      description: "Mobile Recharge 9876543220",
      status: "fail",
    },
  ];

  return (
    <div className="earnings-page">
      {/* Top Earnings Summary */}
      <div className="earnings-container">
        {earningsData.map((data, index) => (
          <div key={index} className="earnings-card">
            <h3 className="earnings-title">{data.title}</h3>
            <p className="earnings-amount">{data.amount}</p>
          </div>
        ))}
      </div>

      {/* Transactions Section */}
      <div className="transactions-container">
        <div className="transactions-header">
          <h2>My Earnings</h2>
          <div className="filter-icon">⚙️</div>
        </div>
        <div className="transactions-list">
          {transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <div className="transaction-details">
                <h3 className="transaction-type">{transaction.type}</h3>
                <p className="transaction-meta">
                  <span>Date: {transaction.date}</span>
                  <span>Amount: {transaction.amount}</span>
                  <span>Description: {transaction.description}</span>
                </p>
              </div>
              <div
                className={`transaction-status ${
                  transaction.status === "success" ? "success" : "fail"
                }`}
              >
                {transaction.status === "success" ? "✔️" : "❌"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;
