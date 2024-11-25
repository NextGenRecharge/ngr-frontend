import React from 'react'

const Input = (props) => {
    const isLabelLegend = props?.labelType === "legend"
    return (
        <div
            style={
                isLabelLegend ? {
                    position: "relative"
                } : {}
            }
            className={props?.containerClass}
        >
            {
                props.label && <label
                    style={
                        isLabelLegend ? {
                            position: "absolute",
                            top: "-5px",
                            left: "15px",
                            background: "white",
                        } : {}
                    }
                    className={"text-sm px-1 " + (props?.labelClass)} htmlFor={props.id}
                >
                    {props.label}
                </label>
            }
            <input
                className={`w-full p-2 mt-1 input ${props.className}`}
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                name={props.name}
                {...props.register}
            />
            {
                props.helperText && <span className={`text-xs text-red-500 ${props.helperTextClass}`}>
                    {props.helperText}
                </span>
            }
        </div>
    )
}

export default Input