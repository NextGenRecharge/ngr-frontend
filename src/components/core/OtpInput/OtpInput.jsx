import React, { useEffect } from 'react'
import { useRef } from 'react'
import { isNumber } from '../../../utils/utils'

const OtpInput = (props) => {
    const { length = 4, value = [] } = props
    const inputRefs = useRef([])
    const isToChange = useRef(true)

    function handleChange(e, i) {
        const nativeValue = e.nativeEvent.data
        if (nativeValue !== null && isToChange.current) {
            if (isNumber(e.target.value?.trim())) {
                const pasteValue = e.target.value?.[e.target.value.length - 1]
                const modified = [...value]
                modified[i] = pasteValue
                props?.onChange?.(modified, i)
                if (i !== (length - 1)) {
                    inputRefs?.current[i + 1]?.focus?.()
                }
            }
        }
        isToChange.current = true
    }

    function handlePaste(e, i) {
        isToChange.current = false;
        const pastedText = e.clipboardData.getData('Text');
        const pasteValue = pastedText?.trim?.()
        if (isNumber(pasteValue)) {
            if (pasteValue.length === 1 || pasteValue.length === length) {
                if (pasteValue.length === 1) {
                    const modified = [...value]
                    modified[i] = pasteValue
                    props?.onChange?.(modified, i)
                } else {
                    const modified = pasteValue.split("")
                    props?.onChange?.(modified, i)
                }
            }
        }
    }

    function handleKeyDown(e, i) {
        console.log('value[i]', value[i])
        const { code } = e

        if (code === "Backspace" || code === "Delete") {
            if (code === "Backspace" && !value?.[i]) {
                if (i !== 0) {
                    inputRefs?.current[i - 1]?.focus?.()
                } else {
                    inputRefs?.current[length - 1]?.focus?.()
                }
            } else if (code === "Delete" && !value?.[i]) {
                if (i !== (length - 1)) {
                    inputRefs?.current[i + 1]?.focus?.()
                } else {
                    inputRefs?.current[0]?.focus?.()
                }
            }
            const modified = [...value]
            modified[i] = ""
            props?.onChange?.(modified, i)
        }

        if (code === "ArrowRight") {
            if (i !== (length - 1)) {
                inputRefs?.current[i + 1]?.focus?.()
            } else {
                inputRefs?.current[0]?.focus?.()
            }
        } else if (code === "ArrowLeft") {
            if (i !== 0) {
                inputRefs?.current[i - 1]?.focus?.()
            } else {
                inputRefs?.current[length - 1]?.focus?.()
            }
        }
        if (code === "ArrowUp") {
            if (i !== (length - 1)) {
                inputRefs?.current[i + 1]?.focus?.()
            } else {
                inputRefs?.current[0]?.focus?.()
            }
        } else if (code === "ArrowDown") {
            if (i !== 0) {
                inputRefs?.current[i - 1]?.focus?.()
            } else {
                inputRefs?.current[length - 1]?.focus?.()
            }
        }
    }

    return (
        <div className='flex gap-3'>
            {
                Array.from({ length }).map((ele, i) => {
                    return (
                        <div>
                            <input
                                autoFocus={props?.autoFocus && i === 0}
                                autoComplete='off'
                                ref={(ref) => {
                                    inputRefs.current[i] = ref
                                }}
                                className='text-center text-2xl focus:border-primary p-2 h-11 w-11 rounded-lg border-gray-300 border-2'
                                min={1}
                                value={value[i]}
                                name={props.name ?? props?.id ?? "otp-input"}
                                onChange={(e) => handleChange(e, i)}
                                onPaste={(e) => handlePaste(e, i)}
                                onKeyDown={(e) => handleKeyDown(e, i)}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OtpInput