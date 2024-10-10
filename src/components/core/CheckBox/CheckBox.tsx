import React, { FC } from 'react';
import './CheckBox.css';
interface CheckBoxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const CheckBox: FC<CheckBoxProps> = ({ id, label, checked, onChange, disabled = false, className = '' }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };
    return (
        <div className={`checkbox-container ${className}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className="custom-checkbox"
            />
            <label htmlFor={id} className="checkbox-label">
                {label}
            </label>
        </div>
    );
};

export default CheckBox;
