import React, { useState, useRef, useEffect, use } from 'react';
import { Link, NavLink } from 'react-router';
import login from '../../assets/login.png'
import signup from '../../assets/signp.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';

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



    // modal functionality

    const modalRef = useRef(null);
    const [activeTab, setActiveTab] = useState('login');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        if (isModalOpen) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isModalOpen]);

    const handleOverlayClick = (e) => {
        if (e.target === modalRef.current) {
            closeModal();
        }
    };

    //firebase authentication

    const { createUser, loginUser, logOutUser, setUser, user } = use(AuthContext)

    //create user 
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user
                // console.log(user);
                setUser(user)
            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    //login user

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user)
        })
        .catch((error) =>{
            console.log(error.code);
        })
    }

    //logout user
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                alert('logout successfully');
            })
            .catch((error) => {
                console.log(error);
            })
    }

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
                        {
                            user ?
                                <a className="btn bg-transparent rounded-3xl hover:bg-black hover:text-white">Log Out</a>
                                : <a onClick={openModal} className="btn bg-transparent rounded-3xl hover:bg-black hover:text-white">Sign In / Register</a>
                        }

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
                        {
                            user ? <Link
                                onClick={handleLogout}
                                className={`border ${isScrolled
                                    ? 'border-black text-black hover:bg-black hover:text-white'
                                    : 'border-[#f1f1f1] text-[#f1f1f1] hover:bg-white hover:text-black'
                                    } p-2 px-3 rounded-2xl text-[12px] bg-transparent hidden md:block font-bold transition-all duration-300 ease-in-out`}
                            >
                                Logout
                            </Link> : <Link
                                onClick={openModal}
                                className={`border ${isScrolled
                                    ? 'border-black text-black hover:bg-black hover:text-white'
                                    : 'border-[#f1f1f1] text-[#f1f1f1] hover:bg-white hover:text-black'
                                    } p-2 px-3 rounded-2xl text-[12px] bg-transparent hidden md:block font-bold transition-all duration-300 ease-in-out`}
                            >
                                Sign In / Register
                            </Link>
                        }

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


            {/* auth modal */}
            <dialog
                ref={modalRef}
                className={`modal ${isModalOpen ? 'modal-open' : ''}`}
                onClick={handleOverlayClick}
            >
                <div className="modal-box relative bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 animate__animated animate__fadeIn animate__faster">
                    <form method="dialog">
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </form>


                    {/* Login Form */}
                    {activeTab === 'login' ? (
                        <form onSubmit={handleLogin} className="space-y-6 p-12 w-full mx-auto">
                            <div>
                                <img className='px-20' src={login} alt="" />
                            </div>
                            <div className='text-center pb-3'>
                                <h1 className='text-2xl font-semibold'>Welcome Back!</h1>
                            </div>
                            <input
                                type="email"
                                name='email'
                                placeholder="Email"
                                className="border-1 border-[#0000002c] rounded-4xl w-full text-lg py-3 px-4"
                                required
                            />
                            <input
                                type="password"
                                name='password'
                                placeholder="Password"
                                className="border-1 border-[#0000002c] rounded-4xl w-full text-lg py-3 px-4"
                                required
                            />
                            <button type="submit" className="btn bg-[#1d225f] text-white  w-full rounded-4xl text-lg py-6">Login</button>
                            <div className="flex flex-col items-center gap-3">
                                <a href="/forgot-password" className=" hover:underline text-[#1d225f] my-3">Forgot Password?</a>
                                <p>New At Chakri Lagbe? <span type="button" className=" hover:underline text-[#1d225f]" onClick={() => setActiveTab('signup')}>Create An Account</span></p>
                            </div>
                        </form>

                    ) : (
                        // Sign Up Form
                        <form onSubmit={handleRegister} className="space-y-6 p-12 w-full mx-auto">
                            <div>
                                <img className='px-16' src={signup} alt="" />
                            </div>
                            <div className='text-center pb-3'>
                                <h1 className='text-2xl font-semibold'>Create An Account</h1>
                            </div>
                            <input
                                type="text"
                                name='name'
                                placeholder="Full Name"
                                className="border-1 border-[#0000002c] rounded-4xl w-full text-lg py-3 px-4"
                                required
                            />
                            <input
                                type="text"
                                name='photo'
                                placeholder='Image URL'
                                className="border-1 border-[#0000002c] rounded-4xl w-full text-lg py-3 px-4"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name='email'
                                className="border-1 border-[#0000002c] rounded-4xl w-full text-lg py-3 px-4"
                                required
                            />
                            <input
                                type="password"
                                name='password'
                                placeholder="Password"
                                className="border-1 border-[#0000002c] rounded-4xl w-full text-lg py-3 px-4"
                                required
                            />
                            <button type="submit" className="btn bg-[#1d225f] text-white  w-full rounded-4xl text-lg py-6">Sign Up</button>
                            <div className="text-sm text-center">
                                <p className="text-gray-600">Already have an account?
                                    <button type="button" className="[#1d225f] hover:underline" onClick={() => setActiveTab('login')}> Sign In</button>
                                </p>
                            </div>
                        </form>

                    )}
                </div>
            </dialog>

        </>
    );
};

export default Navbar;
