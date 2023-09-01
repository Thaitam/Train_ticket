import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";

import card_icon from '../assets/icon/button add (lấy).svg'

const Popular = () => {
    const API_POPULAR = 'https://localhost:7179/api/Trains_Info';

    const [formattedData, setFormattedData] = useState([]);

    const options = {
        day: 'numeric',
        month: 'numeric'
    };
    
    useEffect(() => {
        axios.get(API_POPULAR)
            .then(response => {
                const data = response.data;

                const formattedData = data.slice(0, 6).map(item => {
                    const departureTime = new Date(item.departureTime);
                    const arrivalTime = new Date(item.arrivalTime);
                    const formattedDepartureTime = departureTime.toLocaleString('en-US', options);
                    const formattedArrivalTime = arrivalTime.toLocaleString('en-US', options);
                    return {
                        ...item,
                        formattedDepartureTime,
                        formattedArrivalTime
                    };
                });

                setFormattedData(formattedData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div id="popular-section">
            <h1>Chuyến Tàu phổ biến</h1>
            <div className='popular_container'>
                {formattedData.map(item => (
                    <div className='popular_card' key={item.trainID}>
                        <div className='popular_card-heading'>
                            <div className='card_title'>
                                <p className='card_title-content'>{item.departureStation}</p>
                                <span><FaArrowRightLong /></span>
                                <p className='card_title-content'>{item.arrivalStation}</p>
                            </div>
                            <div className='card_sub'>
                                <p className='card_sub-content'>{item.departureStation}</p>
                                <p className='card_sub-content'>{item.arrivalStation}</p>
                            </div>
                        </div>
                        <div className='popular_card-body'>
                            <p className='card_dop'>{item.formattedDepartureTime}</p>
                            <span>-</span>
                            <p className='card_dop'>{item.formattedArrivalTime}</p>
                        </div>
                        <img className='card_icon' src={card_icon}/>
                        <div className='card_price'>
                            <div className='horizontal_rule'></div>
                            <p><span>Từ</span> 943.000<span>đ</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Popular;
