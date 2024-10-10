import React from 'react';
import './RadioGroup.css';

interface RadioGroupProps {
    options: { label: string; value: string }[];
    name: string;
    selectedValue?: string;
    onChange?: (value: string) => void;
    className?: string;
    register?: any;
    labelPosition?: 'left' | 'right';
    radioDirection?: 'horizontal' | 'vertical';
}

const RadioGroup: React.FC<RadioGroupProps> = ({
    options,
    name,
    selectedValue,
    onChange,
    className,
    register,
    labelPosition = 'right',
    radioDirection = 'horizontal'
}) => {
    return (
        <div className={`radio-group ${className} ${radioDirection === 'horizontal' ? 'flex-row' : 'flex-column'}`}>
            {options.map((option) => (
                <label key={option.value} className={`radio-label ${labelPosition === 'left' ? 'label-left' : 'label-right'}`}>
                    {labelPosition === 'left' && option.label}
                    <input
                        type="radio"
                        name={name}
                        {...(option.value !== undefined ? { value: option.value } : {})}
                        {...(selectedValue !== undefined ? { checked: selectedValue === option.value } : {})}
                        onChange={() => onChange?.(option.value)}
                    />
                    {labelPosition === 'right' && option.label}
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;