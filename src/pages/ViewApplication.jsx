import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const applications = useLoaderData();
    
    const handleStatusUpdated = (e, id) => {
        console.log(e.target.value, id)
    }


    return (
        <div>
            <h2 className='text-3xl'>Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Updated Status</th>
      </tr>
    </thead>
    <tbody>
      {
        applications.map((app, index) => <tr key={app._id}>
            <th>{index+1}</th>
            <td>{app.applicant_email}</td>
            <td>Quality Control Specialist</td>
            <td>
                <select
                 onChange={(e) => handleStatusUpdated(e, app._id)}
                 defaultValue= {app.status || "change Status"} className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled>change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                </select>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplication;