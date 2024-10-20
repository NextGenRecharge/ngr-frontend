import React from 'react';
import './TitleBanner.css';

const TitleBanner = (props) => {
    const { icon, title, subtitle, description } = props;

    return (
        <div className="title-banner-container tracking-wide">
            <div>
                <div className="title-banner-body" >
                    <h1 className='text-2xl text-primary text-center'>{title}</h1>
                    <div className="title-banner-illustration">
                        {icon && icon}
                    </div>
                    <h2 className='mt-2 text-2xl text-primary text-left w-full'>{subtitle}</h2>
                    <div className='text-gray-600 mb-2 w-full'>{description}</div>
                    <div className="body-container w-full">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleBanner;
