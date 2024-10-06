import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Job from "../../Job/Job";
const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDataLength]=useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-36">
      <SectionTitle
        sectionTitle="Featured Jobs"
        sectionPara="Explore thousands of job opportunities with all the information you need. Its your future"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-10 ">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center my-8">
        {dataLength === jobs.length ? (
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-[#8588FE] hidden "
          >
            See All Jobs
          </button>
        ) : (
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-[#8588FE]  "
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
