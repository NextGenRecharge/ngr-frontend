import React from 'react'

const Input = (props) => {
    return (
        <div className={'h-[50px] ' + props?.containerClass}>
            {
                props.label && <label className="text-sm" htmlFor={props.id}>{props.label}</label>
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