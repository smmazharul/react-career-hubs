
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import moneyIcon from '../../assets/icons/money.png'
import jobIcon from '../../assets/icons/calendar.png'
import phone from '../../assets/icons/phone.png'
import email from '../../assets/icons/email.png'
import location from '../../assets/icons/Location2.png'
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import { saveJobApplication } from '../../utility/localStore';

const JobDetails = () => {
 const jobs = useLoaderData();
    const {id}  = useParams();
   const idInt=parseInt(id)
   const navigate=useNavigate()
    
    const job = jobs.find((job) => job.id === idInt);
    console.log(job)
    const {
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
      salary,
      job_title,
      contact_information,
    } = job;



    const handleAppliedJob = () => {
        saveJobApplication(idInt);
        navigate('/')
    }
    return (
      <div>
        <div className="banner hidden lg:block min-h-56 ">
          <div className="flex justify-between items-center">
                    <img src={bg1} alt="" />
                    <h1 className='text-3xl font-bold'>Job Details</h1>
            <img src={bg2} alt="" />
          </div>
        </div>
        <div>
          <div className="p-4  ">
            <div className=" flex flex-col justify-start gap-5 lg:flex-row-reverse">
              <div className="bg-[#f4f1ff]  lg:w-4/12 rounded-lg">
                <div className="p-6">
                  <h2 className="text-3xl font-bold">Job Details</h2>
                  <hr className="my-5 border-black" />
                  <p className="flex my-2 text-xl">
                    <img src={moneyIcon} alt="" /> <strong> Salary: </strong>
                    {salary}(Per Month)
                  </p>
                  <p className="flex text-xl">
                    <img src={jobIcon} alt="" /> <strong> Job Title: </strong>
                    {job_title}
                  </p>
                  <hr className="my-5 border-black" />
                  <h1 className="text-3xl font-bold my-5">
                    Contact Information
                  </h1>
                  <p className="flex text-xl">
                    <img src={phone} alt="" /> <strong> Phone: </strong>
                    {contact_information.phone}
                  </p>
                  <p className="flex text-xl my-3">
                    <img src={email} alt="" /> <strong> Email: </strong>
                    {contact_information.email}
                  </p>
                  <p className="flex text-xl">
                    <img src={location} alt="" width="20px" className="h-10" />{" "}
                    <strong> Location: </strong>
                    {contact_information.address}
                  </p>
                  <div className="my-5 text-center">
                    <button onClick={handleAppliedJob} className="btn bg-[#8588FE] w-full text-white text-xl font-bold">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-8/12">
                <h1 className="text-x">
                  {" "}
                  <strong>Job Description:</strong> {job_description}
                </h1>
                <p className="py-6">
                  <strong>Job responsibility: </strong>
                  {job_responsibility}
                </p>
                <p>
                  <strong>Educational Requirements:</strong> <br />
                  {educational_requirements}
                </p>
                <p>
                  <strong>Experiences::</strong> <br />
                  {experiences}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobDetails;