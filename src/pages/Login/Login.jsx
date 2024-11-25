import React, { useState } from 'react';
import './Login.css';
import SignUpBG from '../../asset/icons/SignUpBG';
import MobileInput from '../../components/core/Input/MobileInput';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import SecureLoginIcon from '../../asset/icons/SecureLoginIcon';
import { Checkbox } from "antd";

const Login = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        defaultValues: {
            phoneNumber: '',
        }
    });



    const navigate = useNavigate()

    const { phoneNumber, countryCode, agree } = watch();
    const isValid = agree && phoneNumber.length === 10
    const handleSendOTP = () => {
        if (isValid) {
            if (phoneNumber.length === 10) {
                navigate('/otp-verify', { state: { number: phoneNumber } });
            } else {
                alert('Please enter a valid 10-digit mobile number.');
            }
        }
    };

    function handleMobileChange(e) {
        setValue('phoneNumber', e.target.value);
    }

    function handleAgree(e) {
        console.log(e.target.checked);
        setValue('agree', e.target.checked);
    }

    return (
        <div className="box-container  p-8">
            <form className="box-container-body" action="" onSubmit={handleSubmit(handleSendOTP)}>
                <div className='h-full w-full flex flex-col justify-between'>
                    <div className='h-auto flex flex-col gap-6'>
                        <div>
                            <h2 className='text-[24px] font-black text-center leading-relaxed'>Let's Get You Started!</h2>
                            <div className='my-3 w-full flex justify-center text-center text-[#00000099] text-sm'>
                                <div className='w-[260px]'>
                                    Enter your number to log in or sign up, it's super quick, promise!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <SecureLoginIcon />
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <div className='w-full flex flex-col gap-2'>
                            <div>
                                <MobileInput
                                    autoFocus
                                    name="mobile"
                                    className='w-full'
                                    selectedCountryCode={countryCode}
                                    mobileNumber={phoneNumber}
                                    onMobileNumberChange={handleMobileChange}
                                    register={register}
                                />
                            </div>
                            <button disabled={!isValid} className={`${!isValid ? "bg-gray-500" : "bg-primary"} w-full h-[48px] mt-1 text-secondary rounded-xl`} type='submit'>Send OTP</button>
                        </div>
                        <div>
                            <Checkbox name='agree' checked={agree} onChange={handleAgree} className="next-checkbox" />
                            <span className='ml-1 text-[#00000099]'>
                                I agree to the <span className='text-primary underline font-bold'>Terms of Service</span> and <span className='text-primary underline font-bold'>Privacy Policy</span>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;