
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CategoryJob from './CategoryJob';


const JobCategory = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch("categories.json")
      .then(res => res.json())
    .then(data=>setCategories(data))
  },[])
   
    return (
      <div>
        <SectionTitle
          sectionTitle="Job Category List"
          sectionPara="Explore thousands of job opportunities with all the information you need. Its your future"
        ></SectionTitle>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-3'>
          {categories.map((category) => (
            <CategoryJob key={category.id} category={category}></CategoryJob>
          ))}
        </div>
      </div>
    );
};

export default JobCategory;