import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';

var API_REGISTER = "https://localhost:7179/api/Auth/register"

const RegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(API_REGISTER, {
                userName,
                email,
                password
            });

            console.log('Register successful:', response.data);
            // Handle success, e.g., redirect to a success page
        } catch (error) {
            alert('Tài khoản đã được đăng ký')
            // Handle error, e.g., display error message to the user
        }
    };
    return (
        <div className='register_form login_form'>
            <div className='form_heading'>
                <h1 className='form_title'>Đăng ký tài khoản</h1>
                <p className='form_sub_title'>Bạn chưa có tài khoản, hãy đăng ký tài khoản để đặt vé tàu du lịch thỏa thích với nhiều ưu đãi hấp dẫn nhé!</p>
            </div>
            <label className='form_lable'>Địa chỉ Email</label>
            <input className='input_form' type="text" name="email" placeholder='Email' id="email" value={email} onChange={(e) => setemail(e.target.value)} />
            <label className='form_lable'>Tên đăng nhập</label>
            <input className='input_form' type="text" name="userName" placeholder='Điền tên đăng nhập' id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label className='form_lable'>Mật khẩu</label>
            <input className='input_form' type="password" name="password" placeholder='Nhập mật khẩu của bạn' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='form_option'>
                <label className='form_option-lb'>
                    <input className='check_rmb' type='checkbox' name='checkbox'/>
                    <span className="checkmark"></span>
                    Lưu mật khẩu
                </label>
                <Link to={'/Login'}>
                    <label className='form_option-lb'>Đăng nhập ngay</label>
                </Link>
                <Routes>
                    <Route path='/Login' element={<Login />} />
                </Routes>
            </div>
            <button className='form_button' type="submit" onClick={handleSubmit}>Đăng nhập</button>
        </div>
    )
}

export default RegisterForm