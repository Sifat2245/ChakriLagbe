import React from 'react';
import { motion } from 'framer-motion';

const Categories = ({ cat }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className='group flex gap-4 border-1 p-5 rounded-2xl items-center border-[#00000028] bg-white transition-all duration-300 cursor-pointer'
    >
      <div>
        <img className='w-28 h-24 object-contain' src={cat.image} alt={cat.categoryName} />
      </div>
      <div>
        <h1 className='font-semibold text-base md:text-lg'>{cat.categoryName}</h1>
        <p className='text-xs text-gray-600'>({cat.availableJobs} open positions)</p>
      </div>
    </motion.div>
  );
};

export default Categories;

