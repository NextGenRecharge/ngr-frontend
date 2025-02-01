import { Modal, Radio } from 'antd'
import React, { useState } from 'react'
import phonePeImg from "../../asset/images/phonePe.png"
import gPayImg from "../../asset/images/gPay.png"
import paytmImg from "../../asset/images/paytm.png"
import API from '../../services/apiService'
import { LoadingOutlined } from '@ant-design/icons'
const Payment = ({ open, onClose, planData, provider, values, loading, createOrderData, paymentCallback }) => {
    const upiOptions = [
        { title: "PhonePe UPI", value: "1", icon: phonePeImg },
        { title: "Google pay UPI", value: "2", icon: gPayImg },
        { title: "Paytm UPI", value: "3", icon: paytmImg },
    ]
    const [value, setValue] = useState("1")
    const [payLoading, setPayLoading] = useState(false)

    async function handlePayment(e) {
        e?.preventDefault?.()
        if (payLoading) return;
        try {
            if (createOrderData.uniqueRefId) {
                const payload = {
                    "payload": [
                        {
                            "uniqueRefId": createOrderData.uniqueRefId,
                            "status": "Success",
                            "paymentId": "NG_080132025878637674",
                            "consumerNumber": values?.phoneNumber,
                            "paymentMode": "UPI",
                            "otherDetails": "{}"
                        }
                    ]
                }
                setPayLoading(true)
                const response = await API.post("/order/confirm_order", payload)
                console.log('response', response)
            }
        } catch (error) {
            console.log('error', error)
        } finally {
            setTimeout(() => {
                paymentCallback()
                setPayLoading(false)
            }, 2000);
        }
    }

    return (
        <Modal
            title={<p>Payment Gateway</p>}
            style={{
                height: "60vh",
                width: "40vw",
                // top: "20px"
            }}
            className="w-[40vw]"
            wrapClassName="w-full"
            footer={null}
            loading={loading}
            open={open}
            onCancel={(e) => onClose?.(e)}
        >
            <div className="w-full h-5/6">
                {
                    !createOrderData.uniqueRefId
                        ? <div>Failed to proceed</div>
                        : <form onSubmit={handlePayment} className='w-full flex flex-col justify-center items-center'>
                            <div className='w-full grid grid-cols-2 gap-3 justify-between py-2 mb-2 border-b border-gray-400'>
                                <div className='text-primary flex justify-start items-end'>
                                    <img height={90} width={90} src={provider.provider_icon} alt="" />
                                </div>
                                <div className='text-primary font-bold text-xl flex flex-col justify-end items-end'>
                                    ₹ {planData.price}
                                    <div className='opacity-50'>Recharge amount</div>
                                </div>
                            </div>
                            <h3 className='text-semibold'>
                                {planData.sortDescription}
                            </h3>
                            <div className='w-full grid grid-cols-2 gap-3 justify-between mb-4'>
                                <div className='text-center border-primary border p-3 m-2 rounded-lg'>
                                    <div className='opacity-50'>Validity</div>
                                    {planData.validity}
                                </div>
                                <div className=' text-center border-primary border p-3 m-2 rounded-lg'>
                                    <div className='opacity-50'>Plan Type</div>
                                    {planData.category_plan}
                                </div>
                            </div>
                            <div className='w-full text-primary'>
                                <p>{planData.description}</p>
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                {
                                    upiOptions.map(item => {
                                        return (
                                            <label for={"radio-upi" + item.value} className='cursor-pointer w-full gap-2 flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <input
                                                        onChange={(e) => (setValue(e.target.value))}
                                                        className='mr-2 w-[24px] h-[24px] cursor-pointer' type='radio' id={"radio-upi" + item.value}
                                                        value={item.value} name="upi"
                                                        checked={value === item.value}
                                                    />
                                                    <div>{item.title}</div>
                                                </div>
                                                <div>
                                                    <img src={item.icon} alt="" />
                                                </div>
                                            </label>
                                        )
                                    })
                                }
                            </div>
                            <button type='submit' disabled={payLoading} className='btn w-full mt-3 gredient animate-bg' >
                                <span>Pay</span>
                                {payLoading && <span className='ml-3'><LoadingOutlined /></span>}
                            </button>
                        </form>
                }
            </div>
        </Modal>
    )
}

export default Payment