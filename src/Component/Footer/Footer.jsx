import React from 'react';

const Footer = () => {
    return (
        <div className="bg-white w-full">
            <footer className="footer sm:footer-horizontal text-base-content p-10 w-4/5 mx-auto">
                <aside>
                    <a className="hover:cursor-pointer text-xl"><span className='font-bold'>Chakri</span> Lagbe</a>
                    <p className='mt-2'>
                        Call us
                        <br />
                        <span className='font-semibold'>(123) 456-7890</span>
                    </p>
                    <p className='mt-2'>
                        90 Fifth Avenue, 3rd Floor <br />
                        San Francisco, CA 1980 <br />
                        office@jobster.com
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Job Posting</a>
                    <a className="link link-hover">Resume Search</a>
                    <a className="link link-hover">Career Advice</a>
                    <a className="link link-hover">Employer Branding</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
