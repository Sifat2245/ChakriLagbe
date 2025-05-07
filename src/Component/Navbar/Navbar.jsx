import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                    Find Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/companies"
                    className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                    Companies
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blogs"
                    className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/faqs"
                    className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                    FAQs
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            {/* Overlay Drawer */}
            <div
                className={`fixed inset-0 z-40 bg-[#00000042] bg-opacity-40 transition-opacity duration-300 ${isDrawerOpen ? 'block' : 'hidden'}`}
                onClick={() => setIsDrawerOpen(false)}
            ></div>

            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setIsDrawerOpen(false)} className="text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <ul className=" p-4 space-y-6 font-bold mt-3">
                    {links}
                    <li>
                        <a className="btn bg-transparent rounded-3xl hover:bg-black hover:text-white">Sign In / Register</a>
                    </li>
                </ul>
            </div>

            {/* Navbar Wrapper for full-width background */}
            <div
                className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-xl' : 'bg-transparent text-white'
                    }`}
            >
                {/* Navbar Content */}
                <div className="navbar w-full md:w-4/5 mx-auto">
                    <div className="navbar-start">
                        <Link to={'/'} className="hover:cursor-pointer p-4 text-xl"><span className='font-bold'>Chakri</span> Lagbe</Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="p-4 menu-horizontal px-1 gap-12 font-bold">{links}</ul>
                    </div>

                    <div className="navbar-end">
                        <Link
                            className={`border ${isScrolled
                                ? 'border-black text-black hover:bg-black hover:text-white'
                                : 'border-[#f1f1f1] text-[#f1f1f1] hover:bg-white hover:text-black'
                                } p-2 px-3 rounded-2xl text-[12px] bg-transparent hidden md:block font-bold transition-all duration-300 ease-in-out`}
                        >
                            Sign In / Register
                        </Link>

                        {/* Hamburger */}
                        <button
                            className="btn btn-ghost hover:bg-transparent lg:hidden"
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Spacer to prevent content jump */}
            <div className="h-16"></div>

        </>
    );
};

export default Navbar;
