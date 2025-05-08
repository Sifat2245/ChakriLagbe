import React, { useState, useRef, useEffect, use } from 'react';
import { Link, NavLink } from 'react-router';
import login from '../../assets/login.png'
import signup from '../../assets/signp.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [error, setError] = useState('')


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

    const { createUser, loginUser, loginWIthGoogle, loginWithGitHub, resetPassword, updateUser, logOutUser, setUser, user } = use(AuthContext)

    //create user 
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')

        createUser(email, password)
            .then((result) => {
                const user = result.user
                updateUser({
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    console.log(user);
                    closeModal()
                }).catch((error) => {
                    console.log(error.code);
                })
            })
            .catch((error) => {
                console.log(error.code);
            })


            if(!/[A-Z]/.test(password)){
                setError('Password must include at least one uppercase letter.')
                return;
            }else if(!/[a-z]/.test(password)){
                setError('Password must include at least one lowercase letter.')
                return;
            }else if(password.length < 6){
                setError('Password must be at least 6 characters long.')
                return;
            }else{
                setError('')
            }
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
                closeModal()
            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    // signin with google

    const handleSignIn = () => {
        loginWIthGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user)
                closeModal()
            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    //sign in with facebook

    const handleGitHubSignIn = () => {
        loginWithGitHub()
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user);
                closeModal()
            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    // reset password

    const handleReset = (e) => {
        e.preventDefault()
        const email = e.target.email.value;

        resetPassword(email)
            .then(() => {
                alert('A reset Email is sent to your gmail account')
                window.open('https://mail.google.com', '_blank');

            })
            .catch((error) => {
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
                    to="/find_jobs"
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
                            user && <Link to={'/my_profile'}>
                                <CgProfile className='h-8 w-8 mr-6 hover:cursor-pointer'></CgProfile>
                            </Link>
                        }
                        {
                            user ? <button
                                onClick={handleLogout}
                                className={`border ${isScrolled
                                    ? 'border-black text-black hover:bg-black hover:text-white'
                                    : 'border-[#f1f1f1] text-[#f1f1f1] hover:bg-white hover:text-black'
                                    } p-2 px-3 rounded-2xl text-[12px] bg-transparent hidden md:block font-bold transition-all duration-300 ease-in-out`}
                            >
                                Logout
                            </button> : <button
                                onClick={openModal}
                                className={`border ${isScrolled
                                    ? 'border-black text-black hover:bg-black hover:text-white'
                                    : 'border-[#f1f1f1] text-[#f1f1f1] hover:bg-white hover:text-black'
                                    } p-2 px-3 rounded-2xl text-[12px] bg-transparent hidden md:block font-bold transition-all duration-300 ease-in-out`}
                            >
                                Sign In / Register
                            </button>
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
                <AnimatePresence>

                    {isModalOpen && (



                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={handleOverlayClick}
                            className="fixed inset-0 bg-[#00000034] bg-opacity-50 flex items-center justify-center z-50 px-4"
                        >

                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -100, opacity: 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="modal-box relative bg-white rounded-lg shadow-lg w-11/12 max-w-xl p-6"
                                onClick={(e) => e.stopPropagation()}
                            >


                                <form method="dialog">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                                        onClick={closeModal}
                                    >
                                        ✕
                                    </button>
                                </form>

                                {/* FORM HANDLING BASED ON activeTab */}
                                {(() => {
                                    switch (activeTab) {

                                        // login form
                                        case 'login':
                                            return (
                                                <form onSubmit={handleLogin} className="space-y-4 p-12 w-full mx-auto">
                                                    <div>
                                                        <img className='px-36' src={login} alt="" />
                                                    </div>
                                                    <div className='text-center pb-3'>
                                                        <h1 className='text-2xl font-semibold text-black'>Welcome Back!</h1>
                                                    </div>
                                                    <input type="email" name='email' placeholder="Email" className="input w-full py-6 rounded-4xl text-black" required />
                                                    <input type="password" name='password' placeholder="Password" className="input w-full py-6 rounded-4xl text-black" required />
                                                    <button type="submit" className="btn bg-[#1d225f] text-white w-full rounded-4xl py-6">Login</button>
                                                    <div className="flex flex-col items-center gap-3">
                                                        <button
                                                            type="button"
                                                            className="text-[#1d225f] hover:underline my-3"
                                                            onClick={() => setActiveTab('forgotPassword')}
                                                        >
                                                            Forgot Password?
                                                        </button>
                                                        <p className='text-black'>
                                                            New at Chakri Lagbe?{" "}
                                                            <button type="button" onClick={() => setActiveTab('signup')} className="text-[#1d225f] hover:underline">
                                                                Create An Account
                                                            </button>
                                                        </p>
                                                        <div className='flex gap-4 pt-2'>
                                                            <button onClick={handleSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                                <FaGoogle /> Login with Google
                                                            </button>
                                                            <button onClick={handleGitHubSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                                <FiGithub /> Login with GitHub
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            );

                                        // signup form
                                        case 'signup':
                                            return (
                                                <form onSubmit={handleRegister} className="space-y-4 p-12 w-full mx-auto">
                                                    <div>
                                                        <img className='px-32' src={signup} alt="" />
                                                    </div>
                                                    <div className='text-center pb-3'>
                                                        <h1 className='text-2xl font-semibold text-black'>Create An Account</h1>
                                                    </div>
                                                    <input type="text" name='name' placeholder="Full Name" className="input w-full py-6 rounded-4xl text-black" required />
                                                    <input type="text" name='photo' placeholder="Image URL" className="input w-full py-6 rounded-4xl text-black" required />
                                                    <input type="email" name='email' placeholder="Email" className="input w-full py-6 rounded-4xl text-black" required />
                                                    <input type="password" name='password' placeholder="Password" className="input w-full py-6 rounded-4xl text-black" required />
                                                    {
                                                        error && <p className='text-red-600 p-1'>{error}</p>
                                                    }
                                                    <button type="submit" className="btn bg-[#1d225f] text-white w-full py-6 rounded-4xl">Sign Up</button>
                                                    <p className="text-center text-black">
                                                        Already have an account?{" "}
                                                        <button type="button" onClick={() => setActiveTab('login')} className="text-[#1d225f] hover:underline">
                                                            Sign In
                                                        </button>
                                                    </p>
                                                    <div className='flex gap-4 justify-center pt-2'>
                                                        <button onClick={handleSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                            <FaGoogle /> Login with Google
                                                        </button>
                                                        <button onClick={handleGitHubSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                            <FiGithub /> Login with GitHub
                                                        </button>
                                                    </div>
                                                </form>
                                            );

                                        // forget password form

                                        case 'forgotPassword':
                                            return (
                                                <form onSubmit={handleReset} className="space-y-4 p-12 w-full mx-auto">
                                                    <div className='text-center pb-3'>
                                                        <h1 className='text-2xl font-semibold text-black'>Reset Your Password</h1>
                                                        <p className='text-sm text-gray-600 mt-2'>Enter your email address and we'll send you a password reset link.</p>
                                                    </div>
                                                    <input type="email" name='email' placeholder="Your Email" className="input w-full py-6 rounded-4xl text-black" required />
                                                    <button type="submit" className="btn bg-[#1d225f] text-white w-full py-6 rounded-4xl">Continue</button>
                                                    <p className="text-center mt-4 text-black">
                                                        Back to{" "}
                                                        <button type="button" onClick={() => setActiveTab('login')} className="text-[#1d225f] hover:underline">
                                                            Login
                                                        </button>
                                                    </p>
                                                </form>
                                            );

                                        default:
                                            return null;
                                    }
                                })()}
                            </motion.div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </dialog>
            {/* <dialog
                ref={modalRef}
                className={`modal ${isModalOpen ? 'modal-open' : ''}`}
                onClick={handleOverlayClick}
            >
                <div className="modal-box relative bg-white rounded-lg shadow-lg w-11/12 max-w-xl p-6 animate__animated animate__fadeIn animate__faster">
                    <form method="dialog">
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </form> */}

            {/* FORM HANDLING BASED ON activeTab */}
            {/* {(() => {
                        switch (activeTab) {

                            // login form
                            case 'login':
                                return (
                                    <form onSubmit={handleLogin} className="space-y-4 p-12 w-full mx-auto">
                                        <div>
                                            <img className='px-36' src={login} alt="" />
                                        </div>
                                        <div className='text-center pb-3'>
                                            <h1 className='text-2xl font-semibold'>Welcome Back!</h1>
                                        </div>
                                        <input type="email" name='email' placeholder="Email" className="input w-full py-6 rounded-4xl" required />
                                        <input type="password" name='password' placeholder="Password" className="input w-full py-6 rounded-4xl" required />
                                        <button onClick={closeModal} type="submit" className="btn bg-[#1d225f] text-white w-full rounded-4xl py-6">Login</button>
                                        <div className="flex flex-col items-center gap-3">
                                            <button
                                                type="button"
                                                className="text-[#1d225f] hover:underline my-3"
                                                onClick={() => setActiveTab('forgotPassword')}
                                            >
                                                Forgot Password?
                                            </button>
                                            <p>
                                                New at Chakri Lagbe?{" "}
                                                <button type="button" onClick={() => setActiveTab('signup')} className="text-[#1d225f] hover:underline">
                                                    Create An Account
                                                </button>
                                            </p>
                                            <div className='flex gap-4 pt-2'>
                                                <button onClick={handleSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                    <FaGoogle /> Login with Google
                                                </button>
                                                <button onClick={handleGitHubSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                    <FiGithub /> Login with GitHub
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                ); */}

            {/* // signup form
                            case 'signup':
                                return (
                                    <form onSubmit={handleRegister} className="space-y-4 p-12 w-full mx-auto">
                                        <div>
                                            <img className='px-32' src={signup} alt="" />
                                        </div>
                                        <div className='text-center pb-3'>
                                            <h1 className='text-2xl font-semibold'>Create An Account</h1>
                                        </div>
                                        <input type="text" name='name' placeholder="Full Name" className="input w-full py-6 rounded-4xl" required />
                                        <input type="text" name='photo' placeholder="Image URL" className="input w-full py-6 rounded-4xl" required />
                                        <input type="email" name='email' placeholder="Email" className="input w-full py-6 rounded-4xl" required />
                                        <input type="password" name='password' placeholder="Password" className="input w-full py-6 rounded-4xl" required />
                                        <button onClick={closeModal} type="submit" className="btn bg-[#1d225f] text-white w-full py-6 rounded-4xl">Sign Up</button>
                                        <p className="text-center">
                                            Already have an account?{" "}
                                            <button type="button" onClick={() => setActiveTab('login')} className="text-[#1d225f] hover:underline">
                                                Sign In
                                            </button>
                                        </p>
                                        <div className='flex gap-4 justify-center pt-2'>
                                            <button onClick={handleSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                <FaGoogle /> Login with Google
                                            </button>
                                            <button onClick={handleGitHubSignIn} className="btn bg-white text-black hover:bg-[#1d225f] hover:text-white border-[#000000]">
                                                <FiGithub /> Login with GitHub
                                            </button>
                                        </div>
                                    </form>
                                );

                            // forget password form

                            case 'forgotPassword':
                                return (
                                    <form onSubmit={handleReset} className="space-y-4 p-12 w-full mx-auto">
                                        <div className='text-center pb-3'>
                                            <h1 className='text-2xl font-semibold'>Reset Your Password</h1>
                                            <p className='text-sm text-gray-600 mt-2'>Enter your email address and we'll send you a password reset link.</p>
                                        </div>
                                        <input type="email" name='email' placeholder="Your Email" className="input w-full py-6 rounded-4xl" required />
                                        <button type="submit" className="btn bg-[#1d225f] text-white w-full py-6 rounded-4xl">Continue</button>
                                        <p className="text-center mt-4">
                                            Back to{" "}
                                            <button type="button" onClick={() => setActiveTab('login')} className="text-[#1d225f] hover:underline">
                                                Login
                                            </button>
                                        </p>
                                    </form>
                                );

                            default:
                                return null;
                        }
                    })()}
                </div>
            </dialog> */}


        </>
    );
};

export default Navbar;
