import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import './layout.css'
import Hero from '../Component/Hero/Hero';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import JobCategory from '../Component/JobCategory/JobCategory';

const Layout = () => {
    return (
        <div className=''>
            <header className='bg-img'>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
                <JobCategory></JobCategory>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;