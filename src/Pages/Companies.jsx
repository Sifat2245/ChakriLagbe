import React from 'react';
import SecondNav from '../Component/Navbar/SecondNav';
import Footer from '../Component/Footer/Footer';
import { useLoaderData } from 'react-router';
import CompanyCard from '../Component/Companies/CompanyCard';

const Companies = () => {
    const data = useLoaderData()
    return (
        <div>
            <header>
                <SecondNav></SecondNav>
            </header>
            <main className='mt-24'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-2'>Browse All Employers</h1>
                    <p className='text-[#00000088]'>Explore a diverse range of top companies actively hiring across various industries. <br /> Whether you're looking for your next big career opportunity or seeking a company that aligns with your values, <br /> you'll find plenty of options to choose from.</p>
                </div>

                <div className='w-4/5 mx-auto my-24'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            data.map(company => (
                                <CompanyCard key={company.id} companies={company} />
                            ))
                        }
                    </div>
                </div>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Companies;