import React from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";

interface PlanInputProps {
    onChange: (number: string) => void;
    onCheckPlanClick?: Function;
    register: any;
    className?: string;
    value?: string;
    readOnly?: boolean;
    name?: string
}

const PlanInput: React.FC<PlanInputProps> = (props) => {
    const {
        value,
        onChange,
        register,
        className = '',
        onCheckPlanClick,
        readOnly,
        name = ""
    } = props
    const handlePlanInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={`plan-input-container ${className}`}>
            <div className="currency flex justify-center items-center h-full">₹</div>
            <input
                type="tel"
                value={value}
                name={props?.name}
                onChange={handlePlanInput}
                className={"plan-input h-full " + (readOnly ? "cursor-not-allowed" : "")}
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
