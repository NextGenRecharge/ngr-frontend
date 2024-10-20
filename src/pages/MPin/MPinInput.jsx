'use client'
import { OTPInput } from 'input-otp'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useForm } from "react-hook-form";


export function cn(...inputs) {
    return twMerge(clsx(inputs))
}
function FakeCaret() {
    return (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
            <div className="w-px h-8 bg-white" />
        </div>
    )
}

export function Slot(props) {
    return (
        <div
            className={cn(
                'relative w-10 h-10 text-[2rem]',
                'flex items-center justify-center',
                'transition-all duration-300',
                'border-border border-x border-y border-r border-l  rounded-l-md rounded-r-md border-black',
                // 'border-border border-y border-r first:border-l  first:rounded-l-md last:rounded-r-md border-black',
                'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
                'outline outline-0 outline-accent-foreground/20',
                { 'outline-4 outline-deep-purple-300': props.isActive },
                // { 'outline-4 outline-accent-foreground': props.isActive },
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
            {props.hasFakeCaret && <FakeCaret />}
        </div>
    )
}


export const PinForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        trigger,
    } = useForm();

    const otpValue = watch("otp"); // Watch the OTP field to compare with Confirm OTP

    const onSubmit = (data) => {
        console.log("OTP and Confirm OTP matched!", data); // Only logs if validation passes
    };

    // Function to handle value changes in OTP and Confirm OTP fields
    const handleOtpChange = (name, value) => {
        setValue(name, value); // Update value in form
        trigger(name); // Trigger validation for the field
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* OTP Field */}
            <div>
                <label htmlFor="otp">Enter your OTP (Length: 4)</label>
                <OTPInput
                    maxLength={4}
                    containerClassName="group flex items-center has-[:disabled]:opacity-30"
                    render={({ slots }) => (
                        <>
                            <div className="flex">
                                {slots.map((slot, idx) => (
                                    <Slot
                                        key={idx}
                                        {...slot}
                                        onChange={(e) => handleOtpChange("otp", e.target.value)}
                                        {...register("otp", {
                                            required: "OTP is required",
                                            minLength: {
                                                value: 4,
                                                message: "OTP must be exactly 4 digits",
                                            },
                                            maxLength: {
                                                value: 4,
                                                message: "OTP must be exactly 4 digits",
                                            },
                                        })}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                />
                {errors.otp && <p style={{ color: "red" }}>{errors.otp.message}</p>}
            </div>

            {/* Confirm OTP Field */}
            <div>
                <label htmlFor="confirmOtp">Confirm your OTP</label>
                <OTPInput
                    maxLength={4}
                    containerClassName="group flex items-center has-[:disabled]:opacity-30"
                    render={({ slots }) => (
                        <>
                            <div className="flex">
                                {slots.map((slot, idx) => (
                                    <Slot
                                        key={idx}
                                        {...slot}
                                        onChange={(e) =>
                                            handleOtpChange("confirmOtp", e.target.value)
                                        }
                                        {...register("confirmOtp", {
                                            required: "Confirm OTP is required",
                                            validate: (value) =>
                                                value === otpValue || "OTPs do not match",
                                        })}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                />
                {errors.confirmOtp && (
                    <p style={{ color: "red" }}>{errors.confirmOtp.message}</p>
                )}
            </div>

            {/* Set Button */}
            <div>
                <button type="submit">Set</button>
            </div>
        </form>
    );
};


export const MPININPUT = () => {
    return (
        <OTPInput
            maxLength={4}
            containerClassName="group flex items-center has-[:disabled]:opacity-30"
            render={({ slots }) => (
                <>
                    <div className="flex">
                        {slots.map((slot, idx) => (
                            <Slot key={idx} {...slot} />
                        ))}
                    </div>
                </>
            )}
        />
    )
}