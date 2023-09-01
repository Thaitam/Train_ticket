import React from 'react'

import { Navbar, Banner, Footer, Popular } from '../components'


import '../assets/css/popular.css'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Popular/>
            <Footer />
        </>


    )
}

export default HomePage