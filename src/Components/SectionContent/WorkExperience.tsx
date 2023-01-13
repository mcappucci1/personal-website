export const WorkExperience = () => {
    return (
        <div className='d-flex mt-3 test'>
            <div className='d-flex flex-column test'>
                <button className='text-gray d-flex align-items-center job-tab'>
                    Lockheed Martin
                </button>
                <button className='text-gray d-flex align-items-center job-tab'>
                    Palantir
                </button>
                <button className='text-gray d-flex align-items-center job-tab'>
                    BlueCreek Software
                </button>
            </div>
            <div className='d-flex flex-column test ps-2'>
                <h4 className='text-gray'>Software Engineer <span className='text-blue'>@ Lockheed Martin</span></h4>
                <p className='text-dark-gray'>Janurary 2022 - Present</p>
                <ul className='text-gray'>
                    <li>Explain the job</li>
                    <li>Explain the job some more</li>
                </ul>
            </div>
        </div>
    );
}