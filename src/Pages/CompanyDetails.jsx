import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../Component/Footer/Footer';
import Jobs from '../Component/Jobs/Jobs';
import PageTitle from '../Component/PageTittle/PageTitle';
import { motion } from "framer-motion";

const CompanyDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const companyDetails = data.find((singleDetails) => singleDetails.id == id)
        setDetails(companyDetails)
    }, [data, id])

    console.log(details);
    return (
        <div>
            <PageTitle title={`${details.name ? details.name : 'Company Details - Chakri Lagbe'}`}></PageTitle>
            <header className=''
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${details.companyBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white'
                }}
            >
                <Navbar></Navbar>

                <div className='w-4/5 mx-auto mt-48 pb-12 flex flex-col md:flex-row gap-6 items-center'>
                    <div>
                        <img className="h-32 w-40 rounded-2xl" src={details.logo} alt="" />
                    </div>
                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='text-3xl font-bold '>{details.name}</h1>
                        <div className='flex gap-2 items-center'>
                            <IoLocationOutline />
                            <p>{details.location}</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 mt-20 mb-20'>
                <section className='lg:col-span-9'>
                    <h1 className='font-bold text-3xl mb-6'>About {details.name}</h1>
                    <p>{details.companyDetails?.about}</p>
                    <p>{details.companyDetails?.mission}</p>

                    <div className='mb-16'>
                        <h1 className='font-bold text-3xl mt-32 mb-2'>Available jobs</h1>
                        <p>Jobs posted by {details.name}</p>
                    </div>

                    <div className=''>
                        {
                            details.jobs?.map(job => <Jobs
                                key={job.id}
                                job={job}
                                logo={details.logo}
                                website={details?.website}></Jobs>)
                        }
                    </div>

                </section>
                {/* right side */}
                <motion.aside
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='p-10 bg-[#feeee7] lg:col-span-3 rounded-3xl my-24'
                >
                    <div className='mb-4'>
                        <p className='text-[#00000083]'>Industry</p>
                        <p className='text-[18px] font-semibold text-[#0000009c]'>{details.industry}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-[#00000083]'>Company Size</p>
                        <p className='text-[18px] font-semibold text-[#0000009c]'>{details.companyDetails?.employees} employees</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-[#00000083]'>Founded In</p>
                        <p className='text-[18px] font-semibold text-[#0000009c]'>{details.companyDetails?.founded}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-[#00000083]'>Location</p>
                        <p className='text-[18px] font-semibold text-[#0000009c]'>{details.location}</p>
                    </div>
                    <div>
                        <p className='text-[#00000083]'>Website</p>
                        <a
                            href={details.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-[18px] font-semibold text-[#0000009c] hover:underline'
                        >
                            {details.website}
                        </a>
                    </div>
                </motion.aside>
            </main>


            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CompanyDetails;