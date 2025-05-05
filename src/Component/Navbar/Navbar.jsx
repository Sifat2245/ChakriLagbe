import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const links = <>
        <li><NavLink>Find Jobs</NavLink></li>
        <li><NavLink>Companies</NavLink></li>
        <li><NavLink>Blogs</NavLink></li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>FAQs</NavLink></li>
    </>;

    return (
        <>
            {/* Overlay Drawer */}
            <div className={`fixed inset-0 z-40 bg-[#00000042] bg-opacity-40 transition-opacity duration-300 ${isDrawerOpen ? 'block' : 'hidden'}`} onClick={() => setIsDrawerOpen(false)}></div>

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setIsDrawerOpen(false)} className="text-2xl font-bold">&times;</button>
                </div>
                <ul className="menu p-4 space-y-2 font-bold">
                    {links}
                    <li><a className="btn bg-transparent">Sign In / Register</a></li>
                </ul>
            </div>

            {/* Main Navbar */}
            <div className="navbar w-full md:w-4/5 mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Chakri Lagbe</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 font-bold">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link
                        className="border border-[#f1f1f1] text-[#f1f1f1] hover:bg-white hover:text-black p-2 px-3 rounded-2xl text-[12px] bg-transparent hidden md:block font-bold transition-all duration-300 ease-in-out"
                    >
                        Sign In / Register
                    </Link>

                    {/* Hamburger */}
                    <button
                        className="btn btn-ghost hover:bg-transparent lg:hidden"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
