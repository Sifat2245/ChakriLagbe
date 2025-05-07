import React, { useState } from 'react';

const Jobs = ({ job, logo, website }) => {
    // console.log(website);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // controls animation

    const handleOpenModal = () => {
        setIsModalOpen(true);
        // small delay to trigger animation after mounting
        setTimeout(() => setIsVisible(true), 10);
    };

    const handleCloseModal = () => {
        setIsVisible(false);
        setTimeout(() => setIsModalOpen(false), 200); // wait for animation to finish
    };

    return (
        <>
            {/* Job Card */}
            <div className='border border-[#0000002d] hover:shadow-md transition-all duration-300 rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 lg:w-[60%]'>
                {/* Logo and Info */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                    <img className='h-20 w-20 rounded-2xl object-cover' src={logo} alt="Company Logo" />
                    <div>
                        <h1 className='text-lg md:text-xl font-semibold'>{job.title}</h1>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-700'>
                            <p>{job.jobType}</p>
                            <p>{job.salary}</p>
                        </div>
                    </div>
                </div>

                {/* Show Details Button */}
                <div className='self-end md:self-auto'>
                    <button
                        onClick={handleOpenModal}
                        className='btn border-black bg-transparent rounded-3xl hover:bg-black hover:text-white px-4 py-2 text-sm md:text-base'>
                        Show Details
                    </button>
                </div>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Background Blur */}
                    <div
                        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        onClick={handleCloseModal}
                    ></div>

                    {/* Modal Content */}
                    <div
                        className={`relative bg-white rounded-xl shadow-lg z-50 w-11/12 max-w-4xl p-6 transform transition-all duration-200 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                    >
                        {/* Banner Image */}
                        <img src={job.bannerImage} alt="Job Banner" className="rounded-xl mb-4 w-full h-72 object-cover" />
                        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>

                        <div className="text-sm text-gray-600 mb-3">
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Type:</strong> {job.jobType}</p>
                            <p><strong>Salary:</strong> {job.salary}</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-1">Job Description</h3>
                            <p className="text-gray-700">{job.description}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-1">Requirements</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {job.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                className="btn btn-outline"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                            <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Apply Now
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Jobs;
