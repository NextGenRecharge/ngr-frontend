import React from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";

interface PlanInputProps {
    onChange: (number: string) => void;
    onClick:(number:string)=>void;
    register: any;
    className?: string;
    value?: string;
}

const PlanInput: React.FC<PlanInputProps> = ({
    value,
    onChange,
    register,
    onClick,
    className = "",
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
                {...register("plan", { required: "plan is required" })}
            />
            <div
                className="check-plan h-full"
                onClick={handleCheckPlansClick}
                role="button"
            >
                Check Plans
            </div>
        </div>
    );
};

export default PlanInput;
