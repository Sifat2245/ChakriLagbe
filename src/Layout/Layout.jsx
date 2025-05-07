import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import './layout.css'
import Hero from '../Component/Hero/Hero';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import JobCategory from '../Component/JobCategory/JobCategory';
import HowItWorks from '../Component/HowItWorks/HowItWorks';
import Companies from '../Component/Companies/Companies';

const Layout = () => {
    return (
        <div className=''>
            <header className='bg-img'>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
                <JobCategory></JobCategory>
                <HowItWorks></HowItWorks>
                <Companies></Companies>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;