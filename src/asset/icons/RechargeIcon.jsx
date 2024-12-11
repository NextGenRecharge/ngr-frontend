import React from 'react'

const RechargeIcon = ({ className = "", isActive = false }) => {
    const strokeStyle = isActive ? { stroke: "var(--primary)", "stroke-opacity": "1" }
        : { stroke: "black", "stroke-opacity": "0.4" }
    const fileStyle = isActive ? { fill: "var(--primary)", "fill-opacity": "0.4" }
        : { fill: "black", "fill-opacity": "0.2" }
    return (
        <svg width="27" height="36" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1667 1.33337C14.9513 1.33321 14.7291 1.33337 14.5 1.33337H12.5C12.2709 1.33337 12.0487 1.33321 11.8333 1.33337M15.1667 1.33337C18.4612 1.33594 20.188 1.37797 21.5266 2.06C22.781 2.69915 23.8009 3.71902 24.44 4.97344C25.1667 6.39952 25.1667 8.26636 25.1667 12V24C25.1667 27.7337 25.1667 29.6006 24.44 31.0266C23.8009 32.2811 22.781 33.3009 21.5266 33.9401C20.1005 34.6667 18.2337 34.6667 14.5 34.6667H12.5C8.76632 34.6667 6.89947 34.6667 5.4734 33.9401C4.21898 33.3009 3.19911 32.2811 2.55996 31.0266C1.83333 29.6006 1.83333 27.7337 1.83333 24L1.83333 12C1.83333 8.26636 1.83333 6.39952 2.55996 4.97344C3.19911 3.71902 4.21898 2.69915 5.4734 2.06C6.81195 1.37797 8.53883 1.33594 11.8333 1.33337M15.1667 1.33337V3.00004L11.8333 3.00004V1.33337" {...strokeStyle} {...fileStyle} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default RechargeIcon