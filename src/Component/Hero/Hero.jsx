import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="text-center mt-60 pb-96">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl md:text-6xl text-white font-bold mb-8"
      >
        Find The Job That <br />
        Fits Your Life
      </motion.h1>

      {/* Search Field */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="bg-white p-4 rounded-[48px] shadow-md max-w-5xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:gap-5 w-11/12 mb-6"
      >
        <input
          type="text"
          placeholder="Search by keyword"
          className="w-full md:w-1/3 p-3 text-sm md:border-r-1 border-[#00000036]"
        />
        <select className="w-full md:w-1/4 p-3 text-sm">
          <option defaultValue>All Locations</option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Rajshahi</option>
        </select>
        <select className="w-full md:w-1/4 p-3 text-sm md:border-l-1 border-[#00000036]">
          <option defaultValue>All Categories</option>
          <option>IT & Software</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
        <button className="btn bg-black text-white rounded-4xl text-sm hover:bg-gray-800 transition-all duration-300 px-5 py-6 w-full md:w-auto">
          Find Jobs
        </button>
      </motion.div>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-white w-11/12 mx-auto"
      >
        Resume-Library is a true performance-based job board. Enjoy custom <br />
        hiring products and access to up to 10,000 new resume registrations <br />
        daily, with no subscriptions or user licenses.
      </motion.p>
    </div>
  );
};

export default Hero;
