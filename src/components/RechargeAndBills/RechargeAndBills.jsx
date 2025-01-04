import React, { useEffect, useMemo, useState } from 'react'
import RechargeIcon from '../../asset/icons/RechargeIcon'
import ElectricityIcon from '../../asset/icons/Electricity'
import DthICon from '../../asset/icons/DthIcon'
import FastTagIcon from '../../asset/icons/FasttagIcon'
import InsuranceIcon from '../../asset/icons/InsuranceIcon'
import { Button } from 'antd'
import MobileRecharge from '../MobileRecharge/MobileRecharge'
import API from '../../services/apiService'
import ComingSoon from '../ComingSoon/ComingSoon'


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

const ServiceIconMap = {
    "Mobile": RechargeIcon,
    "FASTag": FastTagIcon,
    "Electricity": ElectricityIcon,
    "DTH": DthICon,
}



const RechargeAndBills = (props) => {

    const [activeServiceType, setActiveServiceType] = useState(1)
    const [serviceList, setServiceList] = useState([])
    const [categoryOptions, setCategoryOptions] = useState({})
    const [loader, setLoader] = useState(true)

    function handleServiceClick(item) {
        setActiveServiceType(item.service_id)
    }

    useEffect(() => {
        setLoader(true)
        API.get("/shopping/bbps/get_list", {
            params: {
                service_id: 0,
                state_id: ""
            }
        }).then(res => {

            const popularList = res?.data?.response?.[0]?.popular?.[0]?.services.filter(item => item.service_name !== "Mobile Postpaid") ?? []
            const firstService = popularList[0].service_id
            setServiceList(popularList)
            setActiveServiceType(firstService)
            API.get("/shopping/bbps/provider/get_list", {
                params: {
                    service_id: firstService,
                    state_id: "",
                }
            }).then(response => {
                setCategoryOptions(response.data.response[0])
            }).catch(error => {
                console.log('error', error)
            }).finally(() => {

            })

        }).catch(error => {
            console.log('error', error)
        }).finally(() => {
            setLoader(false)
        })
    }, [])

    const ComponentMap = useMemo(() => {
        return {
            "Mobile": <MobileRecharge categoryOptions={categoryOptions} />,
            "FASTag": <ComingSoon />,
            "Electricity": <ComingSoon />,
            "DTH": <ComingSoon />,
        }
    }, [categoryOptions])

    const Component = useMemo(() => {
        if (activeServiceType === -1) {
            return <ComingSoon />
        }
        const service = serviceList?.find?.(item => item.service_id === activeServiceType)
        return service ? ComponentMap[service.service_name] : null

    }, [ComponentMap, activeServiceType, serviceList])

    return (
        <div className='services-content-container w-full h-full flex flex-1 flex-col gap-4'>
            <div className='services-form-header flex justify-between w-full'>
                <h2 className='text-2xl '>{props.title}</h2>
                {/* <div className='text-primary cursor-pointer'>View All</div> */}
            </div>
            <div className='w-full flex justify-between gap-3'>
                {
                    serviceList?.map?.(item => {
                        const Icon = ServiceIconMap[item.service_name]
                        return (
                            <button className='cursor-pointer flex flex-col items-center justify-center gap-2' onClick={() => handleServiceClick(item)}>
                                <div>
                                    {Icon && <Icon isActive={activeServiceType === item.service_id} />}
                                </div>
                                <div className={`text-xs font-semibold ${activeServiceType === item.service_id ? "text-primary" : "text-opacity-40 text-black"}`} >
                                    {item.service_name}
                                </div>
                            </button>
                        )
                    })
                }
            </div>
            <div className='services-form-container flex-1'>
                {Component}
            </div>
        </div>
    )
}

export default RechargeAndBills