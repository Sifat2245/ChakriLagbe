import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import './layout.css'
import Hero from '../Component/Hero/Hero';
import Footer from '../Component/Footer/Footer';
import JobCategory from '../Component/JobCategory/JobCategory';
import HowItWorks from '../Component/HowItWorks/HowItWorks';
import Companies from '../Component/Companies/Companies';
import PageTitle from '../Component/PageTittle/PageTitle';
import FAQ from '../Pages/FAQ';

const Layout = () => {
    return (
        <div className=''>

            <PageTitle title={'Home - Chakri Lagbe'}>

            </PageTitle>
            <header className='bg-img'>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
               
                <JobCategory></JobCategory>
                <HowItWorks></HowItWorks>
                <Companies></Companies>
                <FAQ></FAQ>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;