'use client'
import logo from "../../asset/logo.png";
import bannerMPIN from '../../asset/BannerMPIN.png'
import './mpin.css'
import { OTPInput, SlotProps } from 'input-otp'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Inspired by Stripe's MFA input.


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

function Slot(props) {
    return (
        <div
            className={cn(
                'relative w-10 h-14 text-[2rem]',
                'flex items-center justify-center',
                'transition-all duration-300',
                'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
                'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
                'outline outline-0 outline-accent-foreground/20',
                { 'outline-4 outline-accent-foreground': props.isActive },
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
            {props.hasFakeCaret && <FakeCaret />}
        </div>
    )
}


export const MPIN = () => {
    return (
        <div className="mpin-container">
            <div className="mpin-set">
                {/* logo and franchise button */}

                <div className="mpin-header">
                    <div className="logo-container">
                        <img src={logo} alt="Company logo" className="logo" />
                    </div>
                    <div className="franchise-apply">
                        <button type="submit" className="w-48 p-2 mt-1 bg-primary text-secondary rounded">
                            Apply for franchise
                        </button>
                    </div>
                </div>

                {/* mpin set up message */}

                <div className="mt-2 mpin-title">
                    <h2>Set up your 4 digit MPIN</h2>
                </div>

                {/* Existing account check */}
                <div className="already-acc-container">
                    <p>Already have an account? <a href="/login">Click here</a></p>
                </div>

                {/* set and confirm pin field */}
                <div className="mt-2 set-pin-cont">
                    <div className="enter-pin-cont">
                        <p>Enter your PIN</p>
                        {/* <input type="password" placeholder="Enter your MPIN" /> */}

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

                                    {/* <FakeDash /> */}

                                    {/* <div className="flex">
                                        {slots.slice(4).map((slot, idx) => (
                                            <Slot key={idx} {...slot} />
                                        ))}
                                    </div> */}
                                </>
                            )}
                        />
                    </div>
                    <div className="conf-pin-cont">
                        <p>Confim your PIN</p>
                        <input type="password" placeholder="Enter your MPIN" />
                    </div>
                </div>

                {/* continue to payment */}
                <div className="continue-btn-cont">
                    <button type="submit" className="w-56 p-2 mt-1 bg-primary text-secondary rounded">
                        Continue to payment
                    </button>
                </div>
            </div>

            {/* Banner image */}
            <div className="mpin-side-image">
                <img height={"100%"} width={"100%"} src={bannerMPIN} alt="MPIN banner image" className="mpin-banner" />
            </div>
        </div>
    )
}