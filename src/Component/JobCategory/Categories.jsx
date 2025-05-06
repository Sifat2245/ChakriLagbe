import React from 'react';

const Categories = ({ cat }) => {
  return (
    <div className='group flex gap-4 border-1 p-5 rounded-2xl items-center border-[#00000028] hover:shadow-lg transition-all duration-300'>
      <div>
        <img className='w-28 h-24' src={cat.image} alt="" />
      </div>
      <div>
        <h1 className='font-semibold'>{cat.categoryName}</h1>
        <p className='text-[12px]'>({cat.availableJobs} open positions)</p>
      </div>
    </div>
  );
};

export default Categories;
