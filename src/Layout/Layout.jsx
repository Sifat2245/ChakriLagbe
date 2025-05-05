import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import './layout.css'
import Hero from '../Component/Hero/Hero';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Layout = () => {
    return (
        <div className='bg-[#f7d1c0]'>
            <header className='bg-img'>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;