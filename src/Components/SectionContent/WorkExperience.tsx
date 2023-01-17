import { WorkExperienceButton } from "./WorkExperienceButton";
import { Job, JOBS } from '../../Utils/Data';
import { useState, useCallback } from 'react';
import '../../Styles/WorkExperience.scss';


export const WorkExperience = () => {

    const [currentJob, setCurrentJob] = useState<Job>(JOBS[0]);

    const handleClickJob = useCallback((job: Job) => {
        setCurrentJob(job);
    }, [setCurrentJob]);

    return (
        <div className='d-flex mt-3'>
            <div className='d-flex flex-column'>
                {
                    JOBS.map((job) => {
                        return (
                            <WorkExperienceButton job={job} onClick={handleClickJob} selected={job.date === currentJob.date} />
                        );
                    })
                }
            </div>
            <div className='d-flex flex-column ps-4'>
                <h4 className='text-gray'>{currentJob.title} <span className='text-blue'>@ {currentJob.companyName}</span></h4>
                <p className='text-dark-gray'>{currentJob.date}</p>
                <ul className='text-gray'>
                    {
                        currentJob.bulletPoints.map((point) => {
                            return (
                                <li><span className='text-gray'>{point}</span></li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}