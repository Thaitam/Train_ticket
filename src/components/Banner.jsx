import React from 'react'

import '../assets/css/banner.css'

const Banner = () => {
    return (
        <div id="banner">
            <div className="banner-container">
                <div className="banner-content">
                    <h1>Đặt vé tàu online <span>-</span> Thuận lợi cho chuyến đi của bạn</h1>
                </div>
                <button className="banner-content_button">Đặt vé ngay {'>'} </button>
            </div>
        </div>
    )
}

export default Banner