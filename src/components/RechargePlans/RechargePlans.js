import React, { useMemo, useState } from "react";
import "./RechargePlans.css";
import { Button, Modal, Tabs } from "antd";

const RechargePlans = (props) => {
  const { plansData, open, loading, onClose } = props

  const tabData = useMemo(() => {
    return Object.entries(plansData).map(([key, value]) => {
      const [tab] = value
      return {
        label: key,
        key: key,
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
                  <button className="btn" onClick={() => props?.onSelect?.(plan)}>Select Plan</button>
                </div>
              </div>
            })
          }
        </div>
      };
    })
  }, [plansData, props])

  console.log('tabData', tabData, plansData)
  return (
    <Modal
      title={<p>Mobile Prepaid Plans</p>}
      style={{
        height: "80vh",
        width: "80vw",
        top: "20px"
      }}
      className="recharge-plan-modal"
      wrapClassName="w-full"
      footer={null}
      loading={loading}
      open={open}
      onCancel={(e) => onClose?.(e)}
    >
      <div className="w-full  h-5/6">
        <Tabs
          defaultActiveKey="1"
          style={{
            height: "95%"
          }}
          items={tabData}
        />
      </div>
    </Modal>
  );
};

export default RechargePlans;
