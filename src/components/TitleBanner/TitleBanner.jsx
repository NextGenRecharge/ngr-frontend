import React from 'react';
import './TitleBanner.css';

const TitleBanner = (props) => {
    const { icon, title, subtitle, description } = props;

    return (
        <div className="title-banner-container tracking-wide">
            <div>
                <div className="title-banner-body gap-2" >
                    <h1 className='text-2xl font-black text-center'>{title}</h1>
                    {/* <h2 className='mt-2 text-2xl text-primary text-left w-full'>{subtitle}</h2> */}
                    <p className='text-center text-gray-600 mb-2 w-full'>{description}</p>
                    <div className="title-banner-illustration p-4">
                        {icon && icon}
                    </div>
                    <div className="body-container w-full">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleBanner;
