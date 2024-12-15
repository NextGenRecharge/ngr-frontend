import React, { useMemo, useState } from "react";
import "./RechargePlans.css";
import { Button, Modal, Tabs } from "antd";

const RechargePlans = (props) => {
  const { plansData, open, loading, onClose } = props

  const tabData = useMemo(() => {
    return Object.entries(plansData).map(([key, value]) => {
      const [tab] = value
      return {
        label: tab.title,
        key: tab.title,
        children: <div className="h-[70vh] overflow-y-auto">
          {
            tab?.data?.map((plan, i) => {
              return <div key={i} className="plan-card">
                <div className="plan-info">
                  <p className="price">₹&nbsp;{plan.price}</p>
                  <p className="validity">{plan.validity}</p>
                  <p className="benefits">{plan.description}</p>
                </div>
                <div className="h-full items-end text-end">
                  <button className="select-plan-button" onClick={() => props?.onSelect?.(plan)}>Select Plan</button>
                </div>
              </div>
            })
          }
        </div>
      };
    })
  }, [plansData, props])

  return (
    <Modal
      title={<p>Mobile Prepaid Plans</p>}
      style={{
        height: "80vh",
        top: "20px"
      }}
      className="recharge-plan-modal"
      footer={null}
      loading={loading}
      open={open}
      onCancel={(e) => onClose?.(e)}
    >
      <div className="w-full">
        <Tabs
          defaultActiveKey="1"
          // tabPosition={"top"}
          style={{
            height: 220,
          }}
          items={tabData}
        />
      </div>
    </Modal>
  );
};

export default RechargePlans;
