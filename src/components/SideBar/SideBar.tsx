import React, { ReactNode, useCallback } from 'react'
import "./SideBar.css"

interface ISideBarProps {
    sidebarData: any[];
    labelKey?: string;
    valueKey?: string;
    onSelect?: Function;
    onParentToggle?: Function;
    containerClass?: string;
    itemClass?: string;
    labelClass?: string;
    iconClass?: string;
    value: any;
}

const SideBar = (props: ISideBarProps) => {

    const {
        sidebarData = [],
        containerClass = "",
        itemClass = "",
        iconClass = "",
        labelClass = "",
        labelKey = "label",
        valueKey = "path",
        onSelect,
        value
    } = props;

    const handleItemClick = useCallback((e: React.MouseEvent<HTMLDivElement>, item: any) => {
        console.log('item', item)
        e.preventDefault?.()
        onSelect?.(item)
    }, [onSelect])


    return (
        <div className={`sidebar-container ${containerClass}`}>
            {
                sidebarData?.map((item, i) => {
                    return (
                        <div
                            key={i}
                            onClick={(e) => handleItemClick(e, item)}
                            className={`sidebar-item ${itemClass} ${value === item[valueKey] ? "active-sidebar" : ""}`}
                        >
                            <div className={`w-[30px] ${iconClass}`}>
                                {item.icon && <img src={item.icon} alt='' />}
                            </div>
                            <div className={`${labelClass}`}>
                                {item[labelKey] && <span>{item[labelKey]}</span>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar