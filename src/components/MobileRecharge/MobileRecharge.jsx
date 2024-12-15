import React, { useMemo, useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import RadioGroup from '../core/Radio/RadioGroup';
import MobileInput from '../core/Input/MobileInput';
import './MobileRecharge.css';
import PlanInput from '../core/Input/PlanInput';
import BarSelector from '../core/BarSelector/BarSelector';
import { ReactComponent as TickIcon } from "../../asset/icons/tick.svg"
import { Button, Modal, Select, Space } from 'antd';
import API from '../../services/apiService';
import RechargePlans from '../RechargePlans/RechargePlans';
const MobileRecharge = (props) => {
    const { categoryOptions = {} } = props
    const circleRef = useRef(null)
    const operatorRef = useRef(null)
    const [planLoading, setPlanLoading] = useState(false)
    const [openPlans, setOpenPlans] = useState(false)
    const [plansData, setPlansData] = useState({})
    const { control, register, handleSubmit, getFieldState, formState: { errors }, watch, setValue, setFocus } = useForm({
        mode: "onBlur",
        defaultValues: {
            type: 'prepaid',
            phoneNumber: '',
            operator: '',
            circle: '',
            plan: ''
        }
    });
    const { phoneNumber, countryCode, type, operator, circle } = watch();

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

    function handleCheckPlans() {
        const phoneState = getFieldState("phoneNumber")
        const operateState = getFieldState("operatoe")
        const circleState = getFieldState("circle")
        if (phoneState.invalid) {
            setFocus("phoneNumber")
        } else if (operateState.invalid) {
            setFocus("operator")
        } else if (circleState.invalid) {
            setFocus("circle")
        } else {
            setOpenPlans(true)
            setPlanLoading(true)
            API.get("/shopping/bbps/prepaid/plans/get_list", {
                params: {
                    provider_id: operator,
                    state_id: circle
                }
            }).then(res => {
                console.log('res', res)
                setPlansData(res.data?.response?.[0] ?? {})
            }).catch(error => {
                console.log('error', error)
            }).finally(() => {
                setPlanLoading(false)
            })
        }
    }

    function handlePlanSelect(plan) {
        setValue("plan", plan.price)
        setOpenPlans(false)
    }

    const { stateOptions, providerOptions } = useMemo(() => {
        return {
            stateOptions: categoryOptions?.state_names?.map?.(item => {
                return {
                    label: item.state_name,
                    value: item.state_id,
                }
            }),
            providerOptions: categoryOptions?.providers?.map?.(item => {
                return {
                    label: item.provider_name,
                    value: item.provider_id,
                    ...item
                }
            })
        }
    }, [categoryOptions?.providers, categoryOptions?.state_names])


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
                    {errors.type && <span className="text-sm text-red-600">{errors.type.message}</span>}
                </div>
                <div>
                    <MobileInput
                        selectedCountryCode={countryCode}
                        mobileNumber={phoneNumber}
                        onMobileNumberChange={handleMobileChange}
                        register={{
                            ...register("phoneNumber", {
                                required: "Mobile number is required"
                            })
                        }}
                        className='h-[45px]'
                    />
                    {errors.phoneNumber && <span className=" text-sm text-red-600">{errors.phoneNumber.message}</span>}
                </div>
                <div>
                    <Controller
                        control={control}
                        name="operator"
                        rules={{
                            required: "Operator is required"
                        }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                defaultValue={field.defaultValue}
                                showSearch
                                placeholder="Select Operator"
                                className='operator h-[45px] block w-full border border-[#ccc] rounded-lg text-primary'
                                options={providerOptions}
                                optionFilterProp="label"
                                optionRender={(option) => (
                                    <Space className='flex gap-2'>
                                        <div className='h-7 w-7' role="img" aria-label={option.data.provider_name} >
                                            <img src={option.data.provider_icon} alt='' />
                                        </div>
                                        {option.data.provider_name}
                                    </Space>
                                )}
                            />
                        )}
                    />
                    {errors.operator && <span className=" text-sm text-red-600">{errors.operator.message}</span>}
                </div>
                <div>
                    <Controller
                        control={control}
                        name="circle"
                        rules={{
                            required: "Circle is required"
                        }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                defaultValue={field.defaultValue}
                                showSearch
                                placeholder="Select circle"
                                optionFilterProp="label"
                                className='operator h-[45px] block w-full border border-[#ccc] rounded-lg outline-[#5F259F]'
                                options={stateOptions}
                            />
                        )}
                    />
                    {errors.circle && <span className=" text-sm text-red-600">{errors.circle.message}</span>}
                </div>
                <div>
                    <PlanInput
                        name='plan'
                        readOnly
                        className='h-[45px] cursor-none'
                        register={{ ...register('plan', { required: 'Plan is required' }) }}
                        onCheckPlanClick={handleCheckPlans}
                    />
                    {errors.plan && <span className=" text-sm text-red-600">{errors.plan.message}</span>}
                </div>
                <button type="submit" className="w-full h-12 p-2 mt-1 bg-primary text-secondary rounded-lg">
                    Submit
                </button>
            </form>
            {
                openPlans &&
                <RechargePlans
                    loading={planLoading}
                    open={openPlans}
                    plansData={plansData}
                    onClose={() => setOpenPlans(false)}
                    onSelect={handlePlanSelect}
                />
            }
        </div>
    );
};

export default MobileRecharge;