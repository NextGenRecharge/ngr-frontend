import React, { useState } from 'react';
import './Login.css';
import SignUpBG from '../../asset/icons/SignUpBG';
import MobileInput from '../../components/core/Input/MobileInput';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
const Login = () => {
    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            phoneNumber: '',
        }
    });

    const navigate = useNavigate()

    const { phoneNumber, countryCode } = watch();

    const handleSendOTP = () => {
        if (phoneNumber.length === 10) {
            navigate('/otp-verify', { state: { number: phoneNumber } });
        } else {
            alert('Please enter a valid 10-digit mobile number.');
        }
    };

    function handleMobileChange(e) {
        setValue('phoneNumber', e.target.value);
    }

    return (
        <div className="signup-container tracking-wide">
            <div>
                <form className="signup-body" action="" onSubmit={handleSubmit(handleSendOTP)}>
                    <TitleBanner
                        icon={<SignUpBG />}
                        title="Login / Sign Up"
                        subtitle="Hey There!"
                        description="Please enter your Mobile Number"
                    >
                        <div className='w-full flex justify-between flex-col'>
                            <MobileInput
                                className='w-full'
                                selectedCountryCode={countryCode}
                                mobileNumber={phoneNumber}
                                onMobileNumberChange={handleMobileChange}
                                register={register}
                            />
                            <button className='w-full p-2 mt-1 bg-primary text-secondary rounded' type='submit'>Send OTP</button>
                        </div>
                    </TitleBanner>
                </form>
            </div>
        </div>
    );
};

export default Login;
