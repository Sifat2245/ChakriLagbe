import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';

const CompanyDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const companyDetails = data.find((singleDetails) => singleDetails.id == id)
        setDetails(companyDetails)
    }, [data, id])

    console.log(details);
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <h1>hello</h1>
        </div>
    );
};

export default CompanyDetails;