import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import { motion } from 'framer-motion';

const JobCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/jobCategory.json')
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  return (
    <motion.div
      className="mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">Popular Job Categories</h1>
        <p>2000+ jobs live - 293 added today.</p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3 mx-auto">
        {category.map(cat => (
          <Categories key={cat.id} cat={cat} />
        ))}
      </div>
    </motion.div>
  );
};

export default JobCategory;
