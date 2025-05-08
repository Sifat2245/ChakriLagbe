import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/undraw_safe_0mei.png';
import img2 from '../../assets/undraw_file-search_cbur.png';
import img3 from '../../assets/undraw_agreement_w6ua.png';

const steps = [
  {
    id: 1,
    img: img1,
    title: 'Create An Account',
    description:
      "Post a job to tell us about your project.\nWe'll quickly match you with the right freelancers.",
  },
  {
    id: 2,
    img: img2,
    title: 'Search Jobs',
    description:
      'Browse profiles, reviews, and proposals\nthen interview top candidates.',
  },
  {
    id: 3,
    img: img3,
    title: 'Save And Apply',
    description:
      'Use the platform to chat, share files,\nand collaborate from your desktop.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HowItWorks = () => {
  return (
    <motion.div
      className='w-11/12 max-w-6xl mx-auto text-center mt-32 px-4'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className='text-4xl font-bold mb-12'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works?
      </motion.h1>

      <div className='flex flex-col lg:flex-row justify-center items-stretch gap-12'>
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className='relative bg-white p-6 rounded-2xl flex-1 flex flex-col items-center border border-gray-200'
          >
            <div className='absolute top-4 right-4 bg-[#fa9332] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold'>
              {step.id}
            </div>

            <div className='mb-4 relative w-full flex justify-center'>
              <img className='h-26 w-40 object-contain' src={step.img} alt={step.title} />
            </div>

            <h2 className='font-semibold text-[20px] text-[#00000085] mt-2'>{step.title}</h2>
            <p className='text-[16px] mt-2 whitespace-pre-line text-gray-600'>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HowItWorks;
