import React, { useState } from "react";
import "./RechargePlans.css";

const RechargePlans = () => {
  // Sample plan categories
  const categories = [
    "Smart Offers",
    "Jio Phone",
    "Jio Bharat",
    "Unlimited",
    "Data Add On",
    "Top Up",
    "Combo Plans",
    "International Roaming",
  ];

  // Sample recharge plans data
  const plans = [
    {
      id: 1,
      price: "₹ 1899",
      validity: "336 Days",
      data: "24 GB",
      benefits:
        "Pack Validity - 336 days, Data - 24 GB, Voice - Unlimited, SMS - 3600",
    },
    {
      id: 2,
      price: "₹ 1199",
      validity: "84 Days",
      data: "3 GB/Day",
      benefits: "Voice: Unlimited Calls | SMS : 100 SMS/day",
    },
    {
      id: 3,
      price: "₹ 1049",
      validity: "84 Days",
      data: "2 GB/Day",
      benefits: "Voice - Unlimited, SMS - 100 SMS/day",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="container">
      <h2>Browse Plans</h2>
      <div className="tab-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`tab ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="plan-info">
              <p className="price">{plan.price}</p>
              <p className="validity">{plan.validity} Validity</p>
              <p className="data">{plan.data} Data</p>
              <p className="benefits">{plan.benefits}</p>
            </div>
            <button className="select-plan-button">Select Plan</button>
          </div>
        ))}
      </div>

      <div className="disclaimer">
        <strong>Disclaimer:</strong> While we support most recharges, we request
        you to verify with your operator once before proceeding.
      </div>
    </div>
  );
};

export default RechargePlans;
