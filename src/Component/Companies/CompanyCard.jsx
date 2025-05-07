import React from 'react';
import { Link } from 'react-router';

const CompanyCard = ({ companies }) => {
    return (
        <Link to={`/company_details/${companies.id}`} className="relative group overflow-hidden rounded-2xl border border-[#00000021] hover:cursor-pointer">
            {/* Background animation layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#ffd2ba] z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />

            {/* Content layer */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-white group-hover:bg-transparent transition-colors duration-500">
                <div>
                    <img className="h-32 w-32" src={companies.logo} alt="" />
                </div>
                <div>
                    <h1 className="text-[20px] font-bold mt-4">{companies.name}</h1>
                    <p className="text-[11px] text-[#00000080]">{companies.location}</p>
                    <p className="mt-6">{companies.companyDetails.about}</p>
                    <p>{companies.companyDetails.mission}</p>
                </div>
                <div className="mt-6">
                    <p>{companies.jobs.length} Jobs Available</p>
                </div>
            </div>
        </Link>
    );
};

export default CompanyCard;
