import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const JobCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('/jobCategory.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    // console.log(category);

    return (
        <div className='mt-28'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-semibold mb-4'>Popular Job Categories</h1>
                <p>2000+ jobs live - 293 added today.</p>
            </div>

            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3 mx-auto'>
                {
                    category.map(cat => <Categories key={cat.id} cat={cat}></Categories>)
                }
            </div>
        </div>
    );
};

export default JobCategory;