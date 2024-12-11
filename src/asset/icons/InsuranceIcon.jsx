import React from 'react'

const InsuranceIcon = ({ className = "", isActive = false }) => {
    const strokeStyle = isActive ? { stroke: "var(--primary)", "stroke-opacity": "1" }
        : { stroke: "black", "stroke-opacity": "0.4" }
    const fileStyle = isActive ? { fill: "var(--primary)", "fill-opacity": "1" }
        : { fill: "black","fill-opacity":"0.4" }
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.28" d="M9.15976 7.18918L18.1391 3.94664C19.2366 3.55034 20.4381 3.55034 21.5355 3.94664L30.6442 7.2359C32.4941 7.90389 33.7805 9.59425 33.9313 11.5552L34.3096 16.4727C34.8645 23.687 31.1243 30.5529 24.7621 33.9991L22.281 35.3431C20.7614 36.1662 18.9244 36.1462 17.423 35.2902L14.8885 33.8451C8.9484 30.4581 5.38679 24.0469 5.64959 17.2141L5.86168 11.6998C5.93994 9.66492 7.24445 7.88082 9.15976 7.18918Z" {...fileStyle} />
            <path d="M9.15976 7.18918L18.1391 3.94664C19.2366 3.55034 20.4381 3.55034 21.5355 3.94664L30.6442 7.2359C32.4941 7.90389 33.7805 9.59425 33.9313 11.5552L34.3096 16.4727C34.8645 23.687 31.1243 30.5529 24.7621 33.9991L22.281 35.3431C20.7614 36.1662 18.9244 36.1462 17.423 35.2902L14.8885 33.8451C8.9484 30.4581 5.38679 24.0469 5.64959 17.2141L5.86168 11.6998C5.93994 9.66492 7.24445 7.88082 9.15976 7.18918Z" {...strokeStyle} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default InsuranceIcon