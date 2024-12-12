import React from 'react';
import { Link } from 'react-router-dom';

const HotsjobCard = ({ job }) => {
    const { _id,title, location, jobType, salaryRange, company, description, requirements, currency, company_logo } = job;
    return (
        <div className="card bg-base-100 p-4 w-96 shadow-xl">
            <div className='flex gap-5'>
                <figure>
                    
                    <img
                    className="w-14"
                        src={company_logo}
                        alt={title} />
                </figure>
                <div>
                    <p>{company}</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body p-0">
                <h2 className="card-title">{title}</h2>
                <p>I{description}</p>
                <div>
                    <p className='flex gap-3 flex-wrap text-center'>
                        {
                            requirements.map((skill, index) => <p key={index} className='border py-2 rounded-md'>{skill}</p>)
                        }
                    </p>
                </div>
                <div className="card-actions justify-end items-center">
                    <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                    <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotsjobCard;