import React from 'react'
import { useForm } from 'react-hook-form';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import SetMPinBg from '../../asset/icons/SetMPinBg';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/core/Input/Input';
import './CreateAccount.css';

const CreateAccount = () => {
    // first -name required, last-name required, email required, dob required, pincode required, referral code optional
    const { handleSubmit, setValue, formState: { errors }, register } = useForm({
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
        <div className="account-succesful-container">
            <form className="w-full" action="" onSubmit={handleSubmit(onSubmit)}>
                <TitleBanner
                    icon={<SetMPinBg className="mpin-svg" />}
                    title="Set Up your Account"
                    subtitle="Your Details"
                    description="Please enter your details below"
                >
                    <div className='form-container'>
                        <div className='w-full flex justify-between flex-col'>
                            <Input
                                placeholder="First Name"
                                register={register('firstName', { required: "First Name is required" })}
                                helperText={errors.firstName && errors.firstName.message}
                            />
                            <Input
                                placeholder="Last Name"
                                register={register('lastName', { required: "Last Name is required" })}
                                helperText={errors.lastName && errors.lastName.message}
                            />
                            <Input
                                placeholder="Enter your Email address"
                                register={register('email', { required: "Email is required" })}
                                helperText={errors.email && errors.email.message}
                            />
                            <div className='w-full h-[50px] flex gap-4'>
                                <div className='w-1/2'>
                                    <Input
                                        type="date"
                                        placeholder="Date of Birth"
                                        register={register('dob', { required: "Date of Birth is required" })}
                                        helperText={errors.dob && errors.dob.message}
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <Input
                                        placeholder="Enter Pincode"
                                        register={register('pincode', { required: "Pincode is required", pattern: { value: /^[0-9]{6}$/, message: "Invalid Pincode" } })}
                                        helperText={errors.pincode && errors.pincode.message}
                                    />
                                </div>
                            </div>
                            <Input
                                placeholder="Enter Referral Code"
                                register={register('referralCode')}
                            />
                            <button className="w-full p-2 mt-1 bg-primary text-secondary rounded" type="submit">CONFIRM</button>
                        </div>
                    </div>
                </TitleBanner>
            </form>
        </div >
    )
}

export default CreateAccount