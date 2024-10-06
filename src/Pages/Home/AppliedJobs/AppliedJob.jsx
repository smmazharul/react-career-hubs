import React from 'react';
import locationIcon from "../../../assets/icons/Location.png";
import moneyIcon from "../../../assets/icons/money.png";
const AppliedJob = ({ appliedJob }) => {
    console.log(appliedJob);
    const {
      logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      job_type,
      salary,
    } = appliedJob;
    return (
      <div className="border-2 flex flex-col md:flex-row justify-between items-start md:items-center border-gray-200 px-4 py-6 rounded-lg shadow-lg mt-5">
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={logo}
            alt=""
            className="bg-gray-200 p-10 rounded-lg w-56 "
          />
          <div>
            <div className="mb-2">
              <h1 className="text-3xl font-bold">{job_title}</h1>
              <h3>{company_name}</h3>
            </div>
            <div className="flex gap-5">
              <button className="py-2 px-4 rounded-lg border border-[#8588FE] text-[#8588FE]">
                {remote_or_onsite}
              </button>
              <button className="py-2 px-4 rounded-lg border border-[#8588FE] text-[#8588FE]">
                {job_type}
              </button>
            </div>
            <div className="flex gap-5">
              <h2 className="flex my-2">
                <img src={locationIcon} alt="" width="20px" height="10px" />{" "}
                {location}
              </h2>
              <h2 className="flex my-2">
                <img src={moneyIcon} alt="" width="20px" /> Salary:
                {salary}
              </h2>
            </div>
          </div>
        </div>

        <div>
          <button className="btn bg-[#8588FE] text-white font-bold text-x">
            View Details
          </button>
        </div>
      </div>
    );
};

export default AppliedJob;