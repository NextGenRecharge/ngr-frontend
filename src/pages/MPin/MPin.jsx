import './MPin.css'
import { MPININPUT } from "./MPinInput";
import TitleBanner from "../../components/TitleBanner/TitleBanner";
import { useForm } from "react-hook-form";
import SetMPinBg from "../../asset/icons/SetMPinBg";
import { useNavigate } from "react-router-dom";
import OtpInput from '../../components/core/OtpInput/OtpInput';
import { useMemo, useState } from 'react';

const MPin = () => {

    const { handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            set: '',
            confirm: ''
        }
    });

    const navigate = useNavigate();
    const values = watch()

    const isValid = useMemo(() => {
        return values?.set && values?.confirm && values?.set?.join?.("") === values?.confirm?.join?.("") && values.set?.length === 4 && values.confirm?.length === 4
    }, [values])

    function onSubmit(data) {
        if (isValid) {
            console.log(data);
            navigate('/create-account');
        } else {
            alert("MPIN does not match");
        }
    }

    function handleChange(value, name) {
        setValue(name, value)
    }

    return (
        <div className='box-container p-8'>
            <form className="box-container-body" action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='h-full w-full flex flex-col justify-between'>
                    <div className='h-auto'>
                        <div>
                            <h2 className='text-[24px] font-black text-center leading-relaxed'>Set your 4 digit M-PIN</h2>
                        </div>
                        <div className="w-full flex justify-between flex-col">
                            <div className="w-full flex flex-col gap-4">
                                <div className='flex flex-col gap-2'>
                                    <div className='text-gray-500 text-sm'>
                                        Enter your M-PIN
                                    </div>
                                    {/* <MPININPUT type='password' length={4} onChange={(value) => handlePinChange("set", value)} /> */}
                                    <OtpInput
                                        value={values.set}
                                        onChange={(val) => handleChange(val, "set")}
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='text-gray-500 text-sm'>
                                        Confirm your M-PIN
                                    </div>
                                    <OtpInput
                                        value={values.confirm}
                                        onChange={(val) => handleChange(val, "confirm")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <button className={`${!isValid ? "bg-gray-500" : "bg-primary"} w-full h-[48px] mt-1 text-secondary rounded-xl`} type='submit'>Continue</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MPin;
