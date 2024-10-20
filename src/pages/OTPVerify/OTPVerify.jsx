import React, { useEffect } from 'react';
import './OTPVerify.css';
import { set, useForm } from 'react-hook-form';
import OTPBg from '../../asset/icons/OTPBg';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MPININPUT } from '../MPin/MPinInput';
import TitleBanner from '../../components/TitleBanner/TitleBanner';

const OTPVerify = () => {
    const { handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            phoneNumber: '',
        }
    });

    const [timer, setTimer] = React.useState(5)
    const location = useLocation()
    const navigate = useNavigate()
    const { otp } = watch()

    function verifyOtp() {
        console.log(otp)
        if (otp.length === 6) {
            navigate('/mpin')
        }
    }

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
        return <Navigate to='/' />
    }

    function handleResend() {
        console.log('resend')
        setTimer(5)
    }

    function handleOtpChange(value) {
        setValue('otp', value)
    }

    return (
        <div className='w-full'>
            <form className="otp-form" action="" onSubmit={handleSubmit(verifyOtp)}>
                <TitleBanner
                    icon={<OTPBg />}
                    title="OTP Verification"
                    subtitle="Hey There!"
                    description={
                        <div>
                            <span>OTP sent to {location.state.number}</span>
                        </div>
                    }
                >
                    <div className='w-full flex justify-between flex-col'>
                        <MPININPUT length={6} onChange={handleOtpChange} />
                        <span
                            className={`w-full text-right underline ${timer === 0 ? "cursor-pointer text-primary hover:text-tertiary" : "text-gray-600 pointer-events-none cursor-not-allowed"}`}
                            onClick={handleResend}
                        >
                            Resend OTP {timer ? `(${timer})` : ''}
                        </span>
                        <button className='w-full p-2 mt-1 bg-primary text-secondary rounded' type='submit'>Verify</button>
                    </div>
                </TitleBanner>
            </form>
        </div>
    );
};

export default OTPVerify;
