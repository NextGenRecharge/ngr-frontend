import React, { Children, ReactNode } from 'react'

interface IBoxContainerProps {
    header?: string | ReactNode;
    headerRender?: () => JSX.Element;
    children?: any;
    headerClass?: string;
    className?: string;
    icon?: ReactNode
}

const BoxContainer = (props: IBoxContainerProps) => {
    const { headerRender } = props
    return (
        <div className={`flex flex-col ${props?.className ?? ""}`}>
            <div className={`px-3 py-2 flex justify-between ${props?.headerClass ?? ""}`}>
                {
                    headerRender
                        ? headerRender() :
                        <>
                            <div className='font-bold text-xl'>
                                {props?.header}
                            </div>
                            <div>
                                {props.icon}
                            </div>
                        </>
                }
            </div>
            <div className='flex-1'>
                {props?.children}
            </div>
        </div>
    )
}

export default BoxContainer