import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const JobsApply = () => {
    const {id} = useParams();
    // custom hook
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }

        fetch('http://localhost:5000/job-Applications', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Job apply successful",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/myApplications')
           }
        })
    }

    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Linkedin URL</span>
          </label>
          <input type="url" name='linkedin' placeholder="Linkedin URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Github URL</span>
          </label>
          <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Resume URL</span>
          </label>
          <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
    );
};

export default JobsApply;