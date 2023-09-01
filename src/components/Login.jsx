import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LoginForm from './LoginForm'
import Register from './Register'


import Login_bg from '../assets/images/login/Group 48095450.svg'
import Login_img_bg from '../assets/images/login/Rectangle 73.png'

import '../assets/css/login.css'


const Login = () => {
    return (
        <>  
            <Navbar/>
            <div className='login-container'>
                <LoginForm/>
                <div className='login_bg'>
                    <img class="group" src={Login_bg} /> <img class="rectangle" src={Login_img_bg} />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login