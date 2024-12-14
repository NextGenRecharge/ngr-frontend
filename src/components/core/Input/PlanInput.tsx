import React from 'react';
import './Input.css';

interface CountryCode {
    code: string;
    name: string;
}

const countryCodes: CountryCode[] = [
    { code: '+1', name: 'USA' },
    { code: '+91', name: 'India' },
    { code: '+44', name: 'UK' },
    // Add more country codes as needed
];

interface PlanInputProps {
    onChange: (number: string) => void;
    onCheckPlanClick?: Function;
    register: any;
    className?: string;
    value?: string;
    readOnly?: boolean
}

const PlanInput: React.FC<PlanInputProps> = ({
    value,
    onChange,
    register,
    className = '',
    onCheckPlanClick,
    readOnly
}) => {
    const handlePlanInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={`plan-input-container ${className}`}>
            <div className="currency h-full" >
                ₹
            </div>
            <input
                type="tel"
                value={value}
                name='plan'
                onChange={handlePlanInput}
                className="plan-input h-full"
                placeholder="Amount"
                readOnly={readOnly}
                {...register}
            />
            <div onClick={(e) => onCheckPlanClick?.(e)} className="check-plan h-full">
                Check Plans
            </div>
        </div>
    );
};

export default PlanInput;