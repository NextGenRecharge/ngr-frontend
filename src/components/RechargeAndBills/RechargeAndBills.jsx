import React, { useState } from 'react'
import RechargeIcon from '../../asset/icons/RechargeIcon'
import ElectricityIcon from '../../asset/icons/Electricity'
import DthICon from '../../asset/icons/DthIcon'
import FastTagIcon from '../../asset/icons/FasttagIcon'
import InsuranceIcon from '../../asset/icons/InsuranceIcon'
import { Button } from 'antd'
import MobileRecharge from '../MobileRecharge/MobileRecharge'


const serviceList = [
    {
        label: "Recharge",
        serviceType: "mobileRecharge",
        icon: RechargeIcon,
    },
    {
        label: "Electricity",
        serviceType: "electricity",
        icon: ElectricityIcon,
    },
    {
        label: "DTH",
        serviceType: "dth",
        icon: DthICon,
    },
    {
        label: "Fast Tag",
        serviceType: "fastTag",
        icon: FastTagIcon,
    },
    {
        label: "Insurance",
        serviceType: "insurance",
        icon: InsuranceIcon,
    },
]

const RechargeAndBills = (props) => {

    const [activeServiceType, setActiveServiceType] = useState("mobileRecharge")

    function handleServiceClick(item) {
        console.log('item', item)
        setActiveServiceType(item.serviceType)
    }

    return (
        <div className='services-content-container w-full h-full flex flex-1 flex-col gap-4'>
            <div className='services-form-header flex justify-between w-full'>
                <h2 className='text-2xl '>{props.title}</h2>
                <div className='text-primary cursor-pointer'>View All</div>
            </div>
            <div className='w-full flex justify-between gap-3'>
                {
                    serviceList.map(item => {
                        const Icon = item.icon
                        return (
                            <button className='cursor-pointer flex flex-col items-center justify-center gap-2' onClick={() => handleServiceClick(item)}>
                                <div>
                                    {Icon && <Icon isActive={activeServiceType === item.serviceType} />}
                                </div>
                                <div className={`text-xs font-semibold ${activeServiceType === item.serviceType ? "text-primary" : "text-opacity-40 text-black"}`} >
                                    {item.label}
                                </div>
                            </button>
                        )
                    })
                }
            </div>
            <div className='services-form-container flex-1'>
                <MobileRecharge />
            </div>
        </div>
    )
}

export default RechargeAndBills