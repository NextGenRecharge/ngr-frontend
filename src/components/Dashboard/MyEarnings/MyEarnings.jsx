import React, { useEffect, useState } from "react";
import "./MyEarnings.css";
import TitleCard from "../../core/TitleCard/TitleCard";
import BoxContainer from "../../core/BoxContainer/BoxContainer";
import { ReactComponent as SettingIcon } from "../../../asset/icons/setting.svg"
import ListCard from "../../core/ListCard/ListCard";
import earningsData from "../../../data/earnings.json"
import Arrow from "../../../asset/icons/Arrow";
import { status } from "./earnings.constant";
import { InfoCircleOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
const MyEarnings = () => {

  const [earnings, setEarnings] = useState({
    summary: [],
    history: {
      title: "",
      list: []
    }
  })

  useEffect(() => {
    setEarnings(earningsData.data)
  }, [])

  const getStatusIcon = (type) => {
    const isPending = type === status.pending
      ? <Loading3QuartersOutlined className="text-lg" />
      : <Arrow />

    return type === status.failed
      ? <InfoCircleOutlined className="text-red-500 text-lg" />
      : isPending
  }

  return (
    <div className="w-9/12 max-h-full px-10">
      <div className="earnings-container">
        <TitleCard list={earnings.summary} titleKey="title" subTitleKey="value" />
      </div>
      <BoxContainer
        header={earnings.history.title}
        icon={<SettingIcon />}
        className="p-5 bg-secondary rounded-xl"
      >
        <ListCard
          className="max-h-[500px] min-h-80 overflow-y-auto p-5"
          list={earnings.history.list}
          renderTitle={(item, i) => {
            return (
              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg ">
                  {item?.title ?? ""}
                </div>
                <div>
                  {
                    getStatusIcon(item.status.type)
                  }
                </div>
              </div>
            )
          }}
          renderFooter={(item, i) => {
            return (
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">
                    Date
                  </div>
                  <span className="text-sm text-gray-700">{item?.date ?? ""}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500  mb-1">
                    Amount
                  </div>
                  <span className="font-semibold">{item?.amount ?? ""}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500  mb-1">
                    Description
                  </div>
                  <span className="font-semibold">{item?.status?.message ?? ""}</span>
                </div>
              </div>
            )
          }}
        />
      </BoxContainer>
    </div>
  );
};

export default MyEarnings;
