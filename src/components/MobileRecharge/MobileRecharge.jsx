import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import RadioGroup from '../core/Radio/RadioGroup';
import MobileInput from '../core/Input/MobileInput';
import './MobileRecharge.css';
import PlanInput from '../core/Input/PlanInput';
import BarSelector from '../core/BarSelector/BarSelector';
import { ReactComponent as TickIcon } from "../../asset/icons/tick.svg"
import { Select } from 'antd';
const MobileRecharge = () => {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        defaultValues: {
            type: 'prepaid',
            phoneNumber: '',
            operator: '',
            circle: '',
            plan: ''
        }
    });
    const onSubmit = data => {
        console.log(data);
        // Handle form submission
    };

    const radioOptions = [
        { value: 'prepaid', label: 'Prepaid' },
        { value: 'postpaid', label: 'Postpaid' }
    ];

    function handleMobileChange(e) {
        setValue('phoneNumber', e.target.value);
    }

    const { phoneNumber, countryCode, type } = watch();

    return (
        <div className="recharge-container flex flex-col p-3 w-full h-full bg-transparent rounded-lg">
            {/* <div className="mb-6 text-start font-extrabold">
                <h2>Mobile Recharge</h2>
            </div> */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 gap-3">
                <div className="flex justify-start gap-6">
                    {/* <RadioGroup name='type' options={radioOptions} register={register} /> */}
                    <BarSelector
                        barData={radioOptions}
                        itemClass="recharge-type-item h-[40px] flex flex-col items-center justify-center text-primary font-semibold bg-[#EDE5FF]"
                        containerClass="w-full grid grid-cols-2"
                        activeClass="recharge-type-item-active"
                        value={type}
                        onChange={(item) => {
                            setValue("type", item.value)
                        }}
                        renderItem={(item) => {
                            return <span className='flex items-center justify-center'>
                                <span className='mr-3'>
                                    {item.value === type ? <TickIcon /> : ""}
                                </span>
                                <span>
                                    {item.label}
                                </span>
                            </span>
                        }}
                    />
                    {errors.type && <p className="text-sm text-red-600">{errors.type.message}</p>}
                </div>
                <div>
                    <MobileInput
                        selectedCountryCode={countryCode}
                        mobileNumber={phoneNumber}
                        onMobileNumberChange={handleMobileChange}
                        register={register}
                        className='h-[45px]'
                    />
                    {errors.phoneNumber && <p className=" text-sm text-red-600">{errors.phoneNumber.message}</p>}
                </div>
                <div>
                    {
                        /* <input
                            id="operator"
                            name="operator"
                            placeholder="Select Operator"
                            {...register('operator', { required: 'operator is required' })}
                            className="operator h-[45px] block w-full border border-[#ccc] px-4 rounded-lg py-2 outline-none"
                        /> */
                    }
                    <Select
                        className='operator h-[45px] block w-full border border-[#ccc] rounded-lg text-primary'
                        options={[{ value: 'Select Operator', label: <span>Select Operator</span> }]}
                    />
                    {errors.operator && <p className=" text-sm text-red-600">{errors.operator.message}</p>}
                </div>
                <div>
                    {/* <input
                        id="circle"
                        name="circle"
                        placeholder="Select Circle"
                        {...register('circle', { required: 'circle is required', min: 1 })}
                        className="select-plan border h-[45px] border-[#ccc] rounded-lg py-2 px-4 outline-none block w-full"
                    /> */}
                    <Select
                        className='operator h-[45px] block w-full border border-[#ccc] rounded-lg outline-[#5F259F]'
                        options={[{ value: 'Select Circle', label: <span>Select Circle</span> }]}
                    />
                    {errors.circle && <p className=" text-sm text-red-600">{errors.circle.message}</p>}
                </div>
                <div>
                    <PlanInput className='h-[45px]' register={register} />
                    {errors.plan && <p className=" text-sm text-red-600">{errors.plan.message}</p>}
                </div>
                <button type="submit" className="w-full h-12 p-2 mt-1 bg-primary text-secondary rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MobileRecharge;