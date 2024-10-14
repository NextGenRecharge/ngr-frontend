import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import './';
// import { Button, Input, Typography } from "@material-tailwind/react"

const Dth = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedCountryCode, setSelectedCountryCode] = React.useState('+1');
    const [dth, setDth] = React.useState('');

    const onSubmit = data => {
        console.log(data);
        // Handle form submission
    };


    return (
        <div className="recharge-container p-3 w-full h-full bg-white rounded-lg shadow-md">
            <div className="mb-6 text-start font-extrabold">
                <h2>DTH Recharge Online</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="flex justify-start gap-6">
                    {errors.type && <p className="text-sm text-red-600">{errors.type.message}</p>}
                </div>
                <div className='h-[45px]'>
                    <input
                        id="vcnumber"
                        name="Enter VC Number"
                        placeholder="Enter VC Number"
                        {...register('vcnumber', { required: 'VC  Number is required' })}
                        className="vcnumber mt-1 block w-full border border-[#ccc] px-4 rounded-lg py-2 outline-none"
                    />
                    {errors.vcnumber && <p className=" text-sm text-red-600">{errors.vcnumber.message}</p>}
                </div>
                <div className='h-[45px]'>
                    <input
                        id="amount"
                        name="Amount"
                        placeholder="Amount"
                        {...register('amount', { required: 'amount is required', min: 1 })}
                        className="amount border border-[#ccc] rounded-lg py-2 px-4 outline-none mt-1 block w-full"
                    />
                    {errors.amount && <p className=" text-sm text-red-600">{errors.amount.message}</p>}
                </div>
                <button type="submit" className="w-full p-2 mt-4 bg-primary text-secondary rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Dth;