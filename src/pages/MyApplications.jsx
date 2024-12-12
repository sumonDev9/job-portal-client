import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";


const MyApplications = () => {
    const {user} = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-Applications?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user.email]);
    return (
        <div>
            <h2>My Applications: {jobs.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{
    jobs.map(job => <tr key={job._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt={job.title} />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.title}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
}
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MyApplications;