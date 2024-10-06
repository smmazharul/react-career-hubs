import React from 'react';
import bannerImage from '../../../assets/images/user.png'
const Banner = () => {
    return (
      <div className="hero  min-h-fit ">
        <div className="hero-content flex-col lg:flex-row-reverse p-0 m-0">
          <img src={bannerImage} className="max-w-lg rounded-lg " />
          <div className="px-4">
            <h1 className="text-5xl font-bold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-[#8588FE]">Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn bg-[#8588FE] text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;