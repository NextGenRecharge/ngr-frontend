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
    register: any;
    className?: string;
    value?: string;
}

const PlanInput: React.FC<PlanInputProps> = ({
    value,
    onChange,
    register,
    className = ''
}) => {
    const handlePlanInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={`plan-input-container ${className}`}>
            <div className="currency" >
                ₹
            </div>
            <input
                type="tel"
                value={value}
                name='plan'
                onChange={handlePlanInput}
                className="plan-input"
                placeholder="Amount"
                {...register('plan', { required: 'plan is required' })}
            />
            <div className="check-plan">
                Check Plans
            </div>
        </div>
    );
};

export default PlanInput;