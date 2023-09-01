import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Register from './Register';

var API_LOGIN = "https://localhost:7179/api/Auth/login"

const LoginForm = () => {
    const [userNameOrEmail, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(API_LOGIN, {
                userNameOrEmail,
                password
            });

            console.log('Login successful:', response.data);
            // Handle success, e.g., redirect to a success page
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error, e.g., display error message to the user
        }
    };
    return (
        <div className='login_form'>
            <div className='form_heading'>
                <h1 className='form_title'>Đăng nhập</h1>
                <p className='form_sub_title'>Nếu bạn đã có tài khoản hãy đăng nhập</p>
            </div>
            <label className='form_lable'>Tên đăng nhập</label>
            <input className='input_form' type="text" name="userNameOrEmail" placeholder='Điền tên đăng nhập' id="userNameOrEmail" value={userNameOrEmail} onChange={(e) => setUserName(e.target.value)} />
            <label className='form_lable'>Mật khẩu</label>
            <input className='input_form' type="password" name="password" placeholder='Nhập mật khẩu của bạn' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='form_option'>
                <label className='form_option-lb'>
                    <input className='check_rmb' type='checkbox' name='checkbox' />
                    <span className="checkmark"></span>
                    Lưu mật khẩu
                </label>
                <label className='form_option-lb'>Quên mật khẩu ?</label>
                <Link to={'/Register'}>
                    <label className='form_option-lb'>Đăng ký ngay</label>
                </Link>
                <Routes>
                    <Route path='/Register' element={<Register />} />
                </Routes>
            </div>
            <button className='form_button' type="submit" onClick={handleSubmit}>Đăng nhập</button>
        </div>
    )
}

export default LoginForm