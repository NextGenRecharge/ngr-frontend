import React, { useEffect, useState } from "react";
import TitleCard from "../../core/TitleCard/TitleCard";
import BoxContainer from "../../core/BoxContainer/BoxContainer";
import { ReactComponent as SettingIcon } from "../../../asset/icons/setting.svg"
import ListCard from "../../core/ListCard/ListCard";
import transactionData from "../../../data/transaction.json"
import tickIcon from "../../../asset/images/tickicon.png"
import { InfoCircleOutlined, Loading3QuartersOutlined } from "@ant-design/icons";

const MyTransactions = () => {

    const [transactionsData, setTransactionsData] = useState({
        summary: [],
        history: {
            title: "",
            list: []
        }
    })

    useEffect(() => {
        setTransactionsData(transactionData.data)
    }, [])

    const getStatusIcon = (type) => {
        const isSuccess = type === "success" ? <img src={tickIcon} alt="" /> : ""
        const isPending = type === "pending"
            ? <Loading3QuartersOutlined className="text-lg" />
            : isSuccess

        return type === "failed" | type === "rejected"
            ? <InfoCircleOutlined className="text-red-500 text-lg" />
            : isPending
    }

    return (
        <div className="w-9/12 max-h-full py-5">
            <div className="earnings-container">
                <TitleCard list={transactionsData.summary} titleKey="title" subTitleKey="value" />
            </div>
            <BoxContainer
                header={transactionsData.history.title}
                icon={<SettingIcon />}
                className="p-5 bg-secondary rounded-xl"
            >
                <ListCard
                    className="max-h-[500px] min-h-80 overflow-y-auto p-5"
                    list={transactionsData.history.list}
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
                                <div className="flex-1 w-min">
                                    <div className="text-sm text-gray-500 mb-1">
                                        Date
                                    </div>
                                    <span className="text-sm text-gray-700">{item?.date ?? ""}</span>
                                </div>
                                <div className="flex-1 text-right">
                                    <div className="text-sm text-gray-500  mb-1">
                                        {item?.status?.message ?? ""}
                                    </div>
                                    <span className="font-semibold">{item?.amount ?? ""}</span>
                                </div>
                            </div>
                        )
                    }}
                />
            </BoxContainer>
        </div>
    );
};

export default MyTransactions;
