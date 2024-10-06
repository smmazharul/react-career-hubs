const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return []
}



const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exit = storedJobApplications.find(jobId => jobId === id);
    if (!exit) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}


export {saveJobApplication,getStoredJobApplication}