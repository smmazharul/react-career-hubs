import React from 'react';
import locationIcon from '../../assets/icons/Location.png'
import moneyIcon from '../../assets/icons/money.png'
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const {
        id,
      logo,
      job_title,
      company_name,
      remote_or_onsite,
      job_type,
      location,
      salary,
    } = job;
    return (
      <div className="border-2 border-[#8588FE] rounded-lg p-10  ">
        <img src={logo} alt="" />
        <h1 className="my-2 text-2xl font-bold">{job_title}</h1>
        <h1 className="my-2">{company_name}</h1>
        <div className="flex gap-3 my-2">
          <h2 className="border-2 border-[#8588FE] px-2 rounded-md text-[#8588FE] my-2">
            {remote_or_onsite}
          </h2>
          <h2 className="border-2 border-[#8588FE] px-2 rounded-md text-[#8588FE] my-2">
            {job_type}
          </h2>
        </div>
        <div className="flex gap-4 my-2">
          <h2 className="flex my-2">
            <img src={locationIcon} alt="" width="20px" height="10px" />{" "}
            {location}
          </h2>
          <h2 className="flex my-2">
            <img src={moneyIcon} alt="" width="20px" />
            {salary}
          </h2>
        </div>
        <Link to={`/job/${id}`}>
          <button className="btn bg-[#8588FE]">View Details</button>
        </Link>
      </div>
    );
};

export default Job;

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co.com/B2dxQbz/airbnb.png" alt="airbnb" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/r4nZs98/Career-Hub.png" alt="Career-Hub" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/MDXTFnY/google.png" alt="google" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/8P5PWPf/netflix.png" alt="netflix" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/LC4ttsG/tesla.png" alt="tesla" border="0"></a> */}