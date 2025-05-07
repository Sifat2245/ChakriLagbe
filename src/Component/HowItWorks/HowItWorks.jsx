import React from 'react';
import img1 from '../../assets/undraw_safe_0mei.png';
import img2 from '../../assets/undraw_file-search_cbur.png';
import img3 from '../../assets/undraw_agreement_w6ua.png';

const steps = [
  {
    id: 1,
    img: img1,
    title: 'Create An Account',
    description: 'Post a job to tell us about your project. \nWe\'ll quickly match you with the right freelancers.',
  },
  {
    id: 2,
    img: img2,
    title: 'Search Jobs',
    description: 'Browse profiles, reviews, and proposals \nthen interview top candidates.',
  },
  {
    id: 3,
    img: img3,
    title: 'Save And Apply',
    description: 'Use the platform to chat, share files, \nand collaborate from your desktop.',
  },
];

const HowItWorks = () => {
  return (
    <div className='w-11/12 max-w-6xl mx-auto text-center mt-32 px-4'>
      <h1 className='text-4xl font-bold mb-12'>How It Works?</h1>
      <div className='flex flex-col lg:flex-row justify-center items-stretch gap-12'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='relative bg-white p-6 rounded-2xl flex-1 flex flex-col items-center'
          >
            
            <div className='absolute top-4 right-4 bg-[#fa9332] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold'>
              {step.id}
            </div>
 
            <div className='mb-4 relative w-full flex justify-center'>
              <img className='h-26 w-40' src={step.img} alt={step.title} />              
            </div>
    
            <h2 className='font-semibold text-[20px] text-[#00000085] mt-2'>{step.title}</h2>
            <p className='text-[16px] mt-2 whitespace-pre-line text-gray-600'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
