import React from 'react'

const Arrow = ({ stroke = "#0CBC8B", position = "bl" }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5161 9.99861C5.12873 12.5859 5.07785 15.2067 5.36394 17.7956C5.38848 18.0176 5.48756 18.2155 5.63603 18.364M14.0014 18.4839C11.4141 18.8713 8.7933 18.9221 6.20443 18.6361C5.98235 18.6115 5.7845 18.5124 5.63603 18.364M5.63603 18.364L18.364 5.63604" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Arrow