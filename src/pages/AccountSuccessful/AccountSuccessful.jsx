import React from 'react'
import './AccountSuccessful.css'
import logo from "../../asset/images/Success.png"
const AccountSuccessful = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('Go to Login')
    }
    return (
        <div className='box-container p-8'>
            <form className="box-container-body" action="" onSubmit={onSubmit}>
                <div className='h-full w-full flex flex-col justify-between'>
                    <div className='h-auto flex flex-col gap-6'>
                        <div className='w-full text-center'>
                            <h2 className='text-[48px] font-black text-center leading-relaxed'>Hurrey!</h2>
                            <div className='my-3 w-full flex justify-center text-[#00000099] text-base'>
                                <div className='w-[260px]'>Your account has been created successfully.</div>
                            </div>
                        </div>
                        <div className='w-full bg-secondary flex justify-center items-center' >
                            <div className='max-w-[440px] flex flex-col justify-center'>
                                <div className="title-banner-illustration">
                                    <img src={logo} width={"100%"} alt="Account Created" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <button autoFocus className={`bg-primary w-full h-[48px] mt-1 text-secondary rounded-xl`} type='submit'>Go to login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AccountSuccessful
