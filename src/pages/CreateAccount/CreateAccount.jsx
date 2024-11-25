import React from 'react'
import { useForm } from 'react-hook-form';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import SetMPinBg from '../../asset/icons/SetMPinBg';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/core/Input/Input';
import './CreateAccount.css';

const CreateAccount = () => {
    // first -name required, last-name required, email required, dob required, pincode required, referral code optional
    const { handleSubmit, setValue, formState: { errors, isValid }, register } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            pincode: '',
            referralCode: ''
        },

    });
    const navigate = useNavigate();
    function onSubmit(data) {
        console.log(data);
        navigate('/account-created');
    }
    console.log({ errors })

    return (
        <div className='box-container p-8'>
            <form className="box-container-body" action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='h-full w-full flex flex-col justify-between'>
                    <div className='h-auto flex flex-col gap-6'>
                        <div>
                            <h2 className='text-[24px] font-black text-center leading-relaxed'>Set up your account</h2>
                            <div className='my-3 w-full text-center text-[#00000099] text-sm'>
                                Please enter your detais below
                            </div>
                        </div>
                        <div className='form-container' >
                            <div className='w-full flex gap-6 justify-between flex-col'>
                                <Input
                                    autoFocus
                                    placeholder="First Name"
                                    labelType="legend"
                                    label="Enter your Name*"
                                    labelClass="text-gray-500"
                                    className="h-[53px]"
                                    register={register('firstName', { required: "First Name is required" })}
                                    helperText={errors.firstName && errors.firstName.message}
                                />
                                <Input
                                    placeholder="Last Name"
                                    labelType="legend"
                                    label="Enter Last Name"
                                    labelClass="text-gray-500"
                                    className="h-[53px]"
                                    register={register('lastName', { required: "Last Name is required" })}
                                    helperText={errors.lastName && errors.lastName.message}
                                />
                                <Input
                                    label="Enter your Email*"
                                    labelClass="text-gray-500"
                                    placeholder="e.g. tony@gmail.com"
                                    labelType="legend"
                                    className="h-[53px]"
                                    type="email"
                                    register={register('email', { required: "Email is required" })}
                                    helperText={errors.email && errors.email.message}
                                />
                                <div className='w-full flex gap-4'>
                                    <div className='w-1/2'>
                                        <Input
                                            label="Date of birth*"
                                            labelType="legend"
                                            labelClass="text-gray-500"
                                            type="date"
                                            className="h-[53px]"
                                            register={register('dob', { required: "Date of Birth is required" })}
                                            helperText={errors.dob && errors.dob.message}
                                        />
                                    </div>
                                    <div className='w-1/2'>
                                        <Input
                                            label="Pin code*"
                                            labelClass="text-gray-500"
                                            placeholder={"e.g. 444806"}
                                            labelType="legend"
                                            className="h-[53px]"
                                            register={register('pincode', { required: "Pincode is required", pattern: { value: /^[0-9]{6}$/, message: "Invalid Pincode" } })}
                                            helperText={errors.pincode && errors.pincode.message}
                                        />
                                    </div>
                                </div>
                                <Input
                                    label="Referral Code"
                                    labelClass="text-gray-500"
                                    placeholder="Enter Referral Code"
                                    labelType="legend"
                                    className="h-[53px]"
                                    register={register('referralCode')}
                                />
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

export default CreateAccount
