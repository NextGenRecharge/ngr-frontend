import React, { useEffect } from 'react';
import './OTPVerify.css';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MPININPUT } from '../MPin/MPinInput';
import OtpInput from '../../components/core/OtpInput/OtpInput';

const OTPVerify = () => {
    const { handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            phoneNumber: '',
        }
    });

    const [timer, setTimer] = React.useState(20)
    const location = useLocation()
    const navigate = useNavigate()
    const { otp } = watch()
    const isValid = otp?.join("").length === 6
    function verifyOtp() {
        if (isValid) {
            // navigate('/mpin')
            navigate('/create-account');
        }
    }
    console.log('isValid', isValid)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev === 0) {
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])

    if (!location.state?.number) {
        return <Navigate replace to='/' />
    }

    function handleResend() {
        console.log('resend')
        setTimer(20)
    }

    function handleOtpChange(value) {
        setValue('otp', value)
    }

    return (
        <div className='box-container p-8'>
            <form className="box-container-body" action="" onSubmit={handleSubmit(verifyOtp)}>
                <div className='h-full w-full flex flex-col justify-between'>
                    <div className='h-auto flex flex-col justify-center'>
                        <div>
                            <h2 className='text-[24px] font-black text-center tracking-wider leading-relaxed'>Verify your OTP sent on {location.state.number}</h2>
                        </div>
                        <div className='flex justify-center'>
                            <OtpInput
                                autoFocus
                                length={6}
                                value={otp}
                                onChange={handleOtpChange}
                            />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <button className={`${!isValid ? "bg-gray-500" : "bg-primary"} w-full h-[48px] mt-1 text-secondary rounded-xl`} type='submit'>Verify</button>
                        <div className='text-center'>
                            <span className='text-[#00000099]'>Didn't received it ?&nbsp;</span>
                            {
                                timer
                                    ? <span className='text-[#00000099]'>Retry in <span className='text-primary font-bold'>({timer})</span> sec</span>
                                    : <span
                                        className={`font-bold mt-1 w-full text-center underline ${timer === 0 ? "cursor-pointer text-primary hover:text-tertiary" : "text-gray-600 pointer-events-none cursor-not-allowed"}`}
                                        onClick={handleResend}
                                    >
                                        Resend OTP
                                    </span>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OTPVerify;
