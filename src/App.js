import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import HomePage from './container/HomePage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/*' element={<HomePage />} />
            </Routes>
        </>
    )
}

export default App