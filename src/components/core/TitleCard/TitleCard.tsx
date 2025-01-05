import React from 'react'

interface ITitleCardProps {
  list?: any[];
  titleKey?: string;
  subTitleKey?: string;
  className?: string;
  itemClass?: string;
  onItemClick?: Function
}
const TitleCard = (props: ITitleCardProps) => {
  const { titleKey = "title", subTitleKey = "subTitle", list = [] } = props
  return (
    <div className={`flex justify-between gap-4 ${props?.className ?? ""}`}>
      {
        list?.map?.((data, index) => (
          <button
            key={index}
            className={`min-w-24 max-w-40 p-3 justify-center items-center flex-1 shadow-lg rounded-xl bg-secondary flex flex-col gap-3 ${props?.itemClass ?? ""}`}
            onClick={(e) => props?.onItemClick?.(e)}
          >
            <h3 className="h-10 text-center text-wrap font-black text-primary text-xl">{data[titleKey]}</h3>
            <p className="font-black text-xl">{data[subTitleKey]}</p>
          </button>
        ))
      }
    </div>
  )
}

export default TitleCard