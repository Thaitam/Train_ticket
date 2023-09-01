import React from 'react'

import logoFB from '../assets/icon/facebook_icon.png'
import logoTW from '../assets/icon/twitter_icon.png'
import logoIG from '../assets/icon/004-instagram.png'

import '../assets/css/footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-about">
                        <div className="footer-about_logo">
                            <h1>VeTauTrucTuyen</h1>
                            <p>Tiện ích cho bạn, có thể đặt vé ở mọi lúc mọi nơi.<br /> Đi du lịch thoải mái cùng gia đình.</p>
                        </div>
                    </div>
                    <ul className="content_services">
                        <li className="header">Dịch vụ</li>
                        <li>Email</li>
                        <li>Chiến dịch</li>
                        <li>Thương hiệu</li>
                    </ul>
                    <ul className="content_about">
                        <li className="header">Vé tàu</li>
                        <li>Giường nằm</li>
                        <li>Ghế ngồi</li>
                        <li>All</li>
                    </ul>
                    <ul className="content_fllowus">
                        <li className="header">Chúng tôi</li>
                        <li><img className="icon icon_facebook" src={logoFB} alt="" /><a href="">Facebook</a></li>
                        <li><img className="icon icon_twitter" src={logoTW} alt="" /><a href="">Twitter</a></li>
                        <li><img className="icon icon_instagram" src={logoIG} alt="" /><a href="">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer_license">
                    <p className="footer_copyright">
                        Copyright © 2023
                    </p>
                    <div className="footer_rules">
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
