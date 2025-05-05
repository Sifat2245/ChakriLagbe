import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import './layout.css'
import Hero from '../Component/Hero/Hero';

const Layout = () => {
    return (
        <div className='bg-[#f7d1c0]'>
            <header className='bg-img'>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
           
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Layout;