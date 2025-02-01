import React, { ReactNode } from 'react'

interface IListCardProps {
    list?: any[],
    renderTitle?: (item: any, index: number) => JSX.Element;
    renderFooter?: (item: any, index: number) => JSX.Element;
    img?: ReactNode;
    emptyListComp?: ReactNode;
    itemClass?: string
    className?: string
    titleClass?: string
    footerClass?: string
}

const ListCard = (props: IListCardProps) => {
    const { list = [] } = props
    return (
        <div className={`flex flex-col justify-center items-center gap-4 ${props?.className ?? ""}`}>
            {
                list.length > 0 ? list?.map((item, index) => {
                    return (
                        <div key={index} className={`px-2 py-3 rounded-lg border border-gray-300 ${props?.itemClass ?? ""}`}>
                            {
                                props?.img &&
                                <div className=''>
                                    {props?.img}
                                </div>
                            }
                            <div className='flex flex-col '>
                                <div className={`px-2 pb-3 border-b border-gray-300 ${props?.titleClass ?? ""}`}>
                                    {
                                        props?.renderTitle
                                            ? props?.renderTitle?.(item, index)
                                            : item?.header
                                    }
                                </div>
                                <div className={`px-2 pt-3 ${props?.footerClass ?? ""}`}>
                                    {
                                        props?.renderFooter
                                            ? props?.renderFooter?.(item, index)
                                            : item?.footer
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
                    : <div> {props?.emptyListComp ?? "No data avaiable"}</div>
            }
        </div>
    )
}

export default ListCard