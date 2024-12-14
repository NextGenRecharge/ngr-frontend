import React from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";

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
    const navigate = useNavigate();

    const handlePlanInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    const handleCheckPlansClick = () => {
        navigate("/recharge-plans");
    };

    return (
        <div className={`plan-input-container ${className}`}>
            <div className="currency h-full">₹</div>
            <input
                type="tel"
                value={value}
                name="plan"
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
