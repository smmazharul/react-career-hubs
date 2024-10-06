import React from 'react';

const SectionTitle = ({ sectionTitle, sectionPara }) => {
  return (
    <div className='text-center my-6'>
      <h1 className='text-4xl font-bold mb-2'>{sectionTitle}</h1>
      <p>{sectionPara}</p>
    </div>
  );
};

export default SectionTitle;