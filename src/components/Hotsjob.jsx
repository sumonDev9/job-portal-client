import React, { useEffect, useState } from 'react';

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
        <div>
            this is hotsjob
        </div>
    );
};

export default Hotsjob;
