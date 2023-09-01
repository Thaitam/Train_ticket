import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'

import logo from '../assets/logo/logo_header.png';
import icon_user from '../assets/icon/user_icon.png';
import icon_ticket from '../assets/icon/ticket_icon.png';

import '../assets/css/header.css';
import Login from './Register';

const Navbar = () => {
    return (
        <header id="header">
            <nav className="nav">
                <div className="nav-logo">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="nav-list">
                    <ul>
                        <li><a>Phổ biến</a></li>
                        <li><a>Đặt vé</a></li>
                        <li><a>Ưu đãi</a></li>
                    </ul>
                </div>
            </nav>
            <div className="nav-icon">
                <Link to={'/Login'}>
                    <a><img src={icon_user} alt="" className="user-icon" /></a>
                </Link>
                <a><img src={icon_ticket} alt="" className="ticket-icon" /></a>
            </div>
            <Routes>
                <Route path='/Login' element={<Login/>} />
            </Routes>
        </header>
    )
}

export default Navbar