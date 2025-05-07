import React from 'react';

const Jobs = ({ job, logo }) => {
    console.log(job);
    return (
        <div className='border-1 border-[#0000002d] hover:shadow-md transition-all duration-300 rounded-3xl p-6 flex items-center justify-between mb-6 w-[60%]'>
            <div className='flex gap-8 items-center'>
                <img className='h-20 w-20 rounded-2xl' src={logo} alt="" />
                <div>
                    <h1 className='text-[20px] font-semibold'>{job.title}</h1>
                    <div className='flex gap-6'>
                        <p>{job.jobType}</p>
                        <p>{job.salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn border-black bg-transparent rounded-3xl hover:bg-black hover:text-white'>Show Details</button>
            </div>
        </div>
    );
};

export default Jobs;