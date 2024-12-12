import React, { useEffect, useState } from 'react';
import HotsjobCard from './HotsjobCard';

const Hotsjob = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    },[]);
    return (
        <div className='py-10 bg-slate-100'>
            <h1 className='text-black text-3xl font-bold text-center'>Job find</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-5'>
                {
                    jobs.map(job => <HotsjobCard key={job._id} job={job}></HotsjobCard>)
                }
            </div>
        </div>
    );
};

export default Hotsjob;
