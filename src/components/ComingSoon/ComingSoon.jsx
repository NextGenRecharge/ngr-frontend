import React from 'react'
import "./ComingSoon.css"
const ComingSoon = () => {
    return (
        <div class="coming_soon_container">
            <h1 className='coming_soon_main_text'>
                Coming Soon...
                <div class="roller">
                    <span id="rolltext">
                        Electricity<br />
                        DTH<br />
                        FASTag<br />
                        <span id="spare-time">too much more</span>
                        <br />
                    </span>
                </div>
            </h1>
        </div>
    )
}

export default ComingSoon