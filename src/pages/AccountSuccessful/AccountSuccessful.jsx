import React from 'react'
import './AccountSuccessful.css'
import logo from "../../asset/images/successful_acc.png"
const AccountSuccessful = () => {
    return (
        <div className='w-full h-[100vh] bg-secondary flex justify-center items-center'>
            <div className='max-w-[440px] flex flex-col justify-center'>
                <div className="title-banner-illustration">
                    <img src={logo} width={"100%"} alt="Account Created" />
                </div>
                <h1 className='mt-3 text-[40px] font-black text-center text-primary w-full'>Congratulations!!</h1>
                <div className='w-full text-center text-[30px] text-primary'>Account successfully</div>
                <div className='w-full text-center text-[30px] text-primary'>created with</div>
                <div className='w-full text-center text-[30px] text-primary'>NextGen Solutions. </div>
                <span className='text-sm mt-4 text-gray-700'>Check your inbox for a confirmation email</span>
                <button className='btn'>Login</button>
            </div>
        </div>
    )
}

export default AccountSuccessful