import React from 'react'
import "./BarSelector.css"
const BarSelector = (props) => {
    const {
        barData,
        valueKey = "value",
        labelKey = "label",
        value = "",
        containerClass = "",
        activeClass = "",
        itemClass = "",
        onChange = () => { },
        renderItem
    } = props

    function handleBarClick(e, item) {
        onChange?.(item)
    }

    return (
        <div className={'barselector-item flex rounded-lg ' + (containerClass)}>
            {
                barData?.map(item => {
                    return (
                        <div
                            className={`cursor-pointer py-2 px-5 barselector-item ${item[valueKey] === value ? (activeClass + " active-baritem") : ""} ${itemClass}`}
                            key={item[valueKey]}
                            onClick={(e) => handleBarClick(e, item)}
                        >
                            {
                                renderItem ? renderItem(item) : item[labelKey]
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BarSelector