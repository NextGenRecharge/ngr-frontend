import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import RadioGroup from '../core/Radio/RadioGroup';
import MobileInput from '../core/Input/MobileInput';
import './MobileRecharge.css';
// import { Button, Input, Typography } from "@material-tailwind/react"

const MobileRecharge = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedCountryCode, setSelectedCountryCode] = React.useState('+1');
    const [mobileNumber, setMobileNumber] = React.useState('');

    const onSubmit = data => {
        console.log(data);
        // Handle form submission
    };

    const radioOptions = [
        { value: 'prepaid', label: 'Prepaid' },
        { value: 'postpaid', label: 'Postpaid' }
    ];

    return (
        <div className="recharge-container p-3 w-full h-full bg-white rounded-lg shadow-md">
            <div className="mb-6 text-start font-extrabold">
                <h2>Mobile Recharge</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="flex justify-start gap-6">
                    {/* <label htmlFor='prepaid'>
                        <input className='mr-2' type='radio' id='prepaid' name='type' value='prepaid' {...register('type', { required: 'Please select a type' })} />
                        <span>Prepaid</span>
                    </label>
                    <label htmlFor='postpaid'>
                        <input className='mr-2' type='radio' id='postpaid' name='type' value='postpaid' {...register('type', { required: 'Please select a type' })} />
                        <span>Postpaid</span>
                    </label> */}
                    <RadioGroup name='type' options={radioOptions} required />
                    {errors.type && <p className="text-sm text-red-600">{errors.type.message}</p>}
                </div>
                <div className='h-[45px]'>
                    {/* <input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter Mobile Number"
                        {...register('phoneNumber', { required: 'phoneNumber is required' })}
                        className="mt-1 block w-full border border-gray-600 py-1 px-4 rounded-lg p-1 outline-none"
                    /> */}
                    <MobileInput
                        selectedCountryCode={selectedCountryCode}
                        mobileNumber={mobileNumber}
                        onCountryCodeChange={setSelectedCountryCode}
                        onMobileNumberChange={setMobileNumber}
                        register={register}
                    />
                    {errors.phoneNumber && <p className=" text-sm text-red-600">{errors.phoneNumber.message}</p>}
                </div>
                <div className='h-[45px]'>
                    <input
                        id="operator"
                        name="operator"
                        placeholder="Choose Operator"
                        {...register('operator', { required: 'operator is required' })}
                        className="operator mt-1 block w-full border border-[#ccc] px-4 rounded-lg py-2 outline-none"
                    />
                    {errors.operator && <p className=" text-sm text-red-600">{errors.operator.message}</p>}
                </div>
                <div className='h-[45px]'>
                    <input
                        id="circle"
                        name="circle"
                        placeholder="Select Circle"
                        {...register('circle', { required: 'circle is required', min: 1 })}
                        className="select-plan border border-[#ccc] rounded-lg py-2 px-4 outline-none mt-1 block w-full"
                    />
                    {errors.circle && <p className=" text-sm text-red-600">{errors.circle.message}</p>}
                </div>
                <button type="submit" className="w-full p-2 mt-4 bg-primary text-secondary rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MobileRecharge;