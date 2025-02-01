import React from 'react'
import { ReactComponent as SuccesIcon } from "../../asset/svgs/succes.svg"
import { Modal } from 'antd'
const IconMap = {
    success: SuccesIcon
}

const dummyData = {
    status: "success",
    title: "Success",
    subTitle: "Transaction completed",
    infoList: [
        { title: "Mobile no.", subTitle: "7979787978" },
        { title: "Transaction amount", subTitle: "₹3,999" },
        { title: "Operator name", subTitle: "Airtel" },
        { title: "Transaction id", subTitle: "551562654142" },
    ]
}

const PaymentStatus = ({ paymentData = dummyData, open, onClose, }) => {
    const { title, status, subTitle, infoList } = paymentData ?? {}
    const StatusIcon = IconMap[status]
    return (
        <Modal
            title={<p></p>}
            style={{
                height: "60vh",
                width: "50vw",
                // top: "20px"
            }}
            className="w-[50vw] flex justify-center"
            wrapClassName="w-full"
            footer={null}
            // loading={loading}
            open={open}
            onCancel={(e) => onClose?.(e)}
        >
            <div className='w-full flex flex-col justify-center items-center gap-3 max-w-80 min-w-48 max-h-96 min-h-48 bg-secondary'>
                <div className='font-bold text-2xl'>
                    {StatusIcon && <StatusIcon />}
                </div>
                <div className='font-bold text-2xl'>{title}</div>
                <div className='font-semibold text-primary-light text-xl'>{subTitle}</div>
                <div className='border rounded-lg p-4 shadow-md'>
                    {
                        infoList?.map?.(item => {
                            return (
                                <div className='p-2 border-b flex justify-between gap-9 items-center'>
                                    <div className='font-semibold opacity-50'>
                                        {item.title}
                                    </div>
                                    <div className='font-semibold'>
                                        {item.subTitle}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Modal>
    )
}

export default PaymentStatus