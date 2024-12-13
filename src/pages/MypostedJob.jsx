import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const MypostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);
    return (
        <div>
            <h2>My posted jobs: {jobs.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Application Count</th>
        <th>Application</th>
      </tr>
    </thead>
    <tbody>
     
     {
        jobs.map((job, index) =>  <tr>
            <th>{index+1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.applicationCount}</td>
            <td>
              <Link to={`/viewApplications/${job._id}`}>
              <button className='btn btn-link'>View Application</button>
              </Link>
            </td>
          </tr>)
     }
     </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MypostedJob;