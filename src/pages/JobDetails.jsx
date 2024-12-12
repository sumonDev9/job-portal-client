import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const {_id, title, company, applicationDeadline} = job;
    
    return (
        <div className='max-w-72 mx-auto border bg-stone-200 p-5 space-y-4 '>
            <h2>Job details for {title}</h2>
            <p>apply for: {company}</p>
            <p>deadline: {applicationDeadline}</p>
            <Link to={`/JobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;