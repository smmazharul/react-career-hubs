import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../../utility/localStore';
import AppliedJob from './appliedJob';
import bg1 from "../../../assets/images/bg1.png";
import bg2 from "../../../assets/images/bg2.png";
const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs,setAppliedJobs]=useState([])
  




  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (Array.isArray(jobs) && jobs.length > 0) {
      // const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
     
    }
  }, [jobs]);

    return (
      <div>
        <div className="banner hidden lg:block min-h-56 ">
          <div className="flex justify-between items-center">
            <img src={bg1} alt="" />
            <h1 className="text-3xl font-bold">Applied Jobs</h1>
            <img src={bg2} alt="" />
          </div>
        </div>

        <div className="my-36 ">
          {appliedJobs.map((appliedJob) => (
            <AppliedJob
              key={appliedJob.id}
              appliedJob={appliedJob}
            ></AppliedJob>
          ))}
        </div>
      </div>
    );
};

export default AppliedJobs;