import React, { useEffect, useState } from 'react';
import './OTPVerify.css';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MPININPUT } from '../MPin/MPinInput';
import OtpInput from '../../components/core/OtpInput/OtpInput';
import API from "../../services/apiService"; // Import API service

const OTPVerify = () => {
    const { handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            phoneNumber: '',
        }
    });

    const [timer, setTimer] = React.useState(20)
    const [accessToken,setAccessToken] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { otp } = watch()
    const isValid = otp?.join("").length === 4
    async function verifyOtp() {
        if (isValid) {
            setLoading(true);
            setError("");
            try {
                const payload = {
                    payload: [
                        {
                            uniqueCode: otp.join(""),
                            mobileNumber: location.state.number,
                            emailId: "sagarmangal10@gmail.com",
                            deviceId: "erueoiwr8493eiurq",
                            imeiNumber: "",
                            deviceType: "WEB",
                            uniqueCodeType: "MOBILE",
                            locationPermission: true,
                            longitude: 0,
                            latitude: 0,
                            clientType: "INDIVIDUAL",
                            contactType: "MOBILE",
                        },
                    ],
                };
                const response = await API.post("/otp/verify_otp", payload, {
                    headers: { "Content-Type": "application/json" },
                });
                console.log(response,"---")
                if (response?.data?.status === "success") {
                    localStorage.setItem('accessToken', response?.data?.response[0]?.accessToken);
                    navigate("/create-account");
                }
            } catch (err) {
                console.error( err?.data?.message);
                setError(
                    err?.data?.message || "Failed to send OTP. Please try again."
                );
            } finally {
                setLoading(false);
            }
        }
    }
    console.log('isValid', accessToken)
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

    async function handleResend() {
        console.log('resend')
        if (location.state.number) {
            setError("");
            try {
                const payload = {
                    payload: [
                        {
                            mobileNumber: location.state.number,
                            emailId: "sagarmangal10@gmail.com",
                            deviceId: "erueoiwr8493eiurq",
                            imeiNumber: "",
                            deviceType: "WEB",
                            uniqueCodeType: "MOBILE",
                            locationPermission: true,
                            longitude: 0,
                            latitude: 0,
                            clientType: "INDIVIDUAL",
                            contactType: "MOBILE",
                        },
                    ],
                };
                const response = await API.post("/otp/sent_otp", payload, {
                    headers: { "Content-Type": "application/json" },
                });
                if (response.status === 200) {
                    console.log(response, "response")
                }
            } catch (err) {
                console.error(err.response?.data || err.message);
                setError(
                    err.response?.data?.message || "Failed to send OTP. Please try again."
                );
            } finally {
            }
        }
        // setTimer(20)

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
                                length={4}
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
