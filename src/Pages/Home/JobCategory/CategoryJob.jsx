import React from 'react';

const CategoryJob = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
      <div className="bg-[#f4f1ff] px-10 py-10 rounded-lg"> 
        <img src={logo} alt="" className="my-4 p-4 bg-[#c1b8f4c2] rounded-lg" />
        <h1 className="text-xl font-bold">{category_name}</h1>
        <h1>{availability}</h1>
      </div>
    );
};

export default CategoryJob;

