import React, { useState } from 'react'
import "./Navigation.css"
import HelpIcon from "../../asset/icons/help_icon.svg"

const items = [
    { label: "Help & Support", path: "/support", icon: HelpIcon },
    // { label: "Dashboard", path: "/dashboard" },
    // { label: "Subscription Plan", path: "/subscription" },
];

interface INavigationProps {
    containerClass?: string;
    itemClass?: string;
    activeClass?: string;
    onItemClick?: Function
}
type TMenuItemType = {
    label?: string;
    path?: string;
    icon?: any
}

const Navigation = React.forwardRef<HTMLDivElement, INavigationProps>((props, ref) => {
    const { containerClass = "", itemClass = "", activeClass = "", onItemClick } = props

    const [selected, setSelected] = useState<string | undefined>(window.location.pathname)

    const handleSelect = (ele: TMenuItemType) => {
        setSelected(ele.path)
        onItemClick?.(ele)
    }

    return (
        <div ref={ref} className={`${containerClass}`}>
            {
                items.map((ele: TMenuItemType, i) => {
                    return (
                        <div
                            key={i}
                            onClick={() => handleSelect(ele)}
                            className={`gap-1 ${selected?.includes(ele.path ?? "") ? `${activeClass}` : ""} ${itemClass}`}
                        >
                            {
                                ele.icon && <img src={ele.icon} alt='' />
                            }
                            <span>{ele.label}</span>
                        </div>
                    )
                })
            }
        </div>
    )
})

export default Navigation