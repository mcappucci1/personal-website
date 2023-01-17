import { Job } from '../../Utils/Data';

interface Props {
    job: Job;
    onClick: (job: Job) => void;
    selected: boolean;
}

export const WorkExperienceButton = ({ job, onClick, selected }: Props) => {
    return (
        <button className={`${selected && 'job-tab-selected'} text-gray px-2 d-flex align-items-center job-tab`} onClick={() => onClick(job)}>
            {job.companyName}
        </button>
    );
}