import '../../Styles/AboutMe.scss';

export const AboutMe = () => {

    return (
        <div className='row mt-4'>
            <div className='col-12 col-lg-7 text-gray'>
                <p>
                    Hi! My name is Matt. I enjoy working on software projects across multiple disciplines.
                    My experience and skills primarily lie in <span className='text-blue'>web development</span>
                    , but I have some professional and academic experience branching into the world of
                    machine learning, data science, and more. I have lots of experience with the following
                    technologies:
                </p>
                <div className='row my-3'>
                    <div className='col-5'>
                        <ul>
                            <li><span className='text-gray'>HTML & CSS</span></li>
                            <li><span className='text-gray'>React & Redux</span></li>
                            <li><span className='text-gray'>TypeScript</span></li>
                        </ul>
                    </div>
                    <div className='col-5'>
                        <ul>
                            <li><span className='text-gray'>JavaScript</span></li>
                            <li><span className='text-gray'>.NET & C#</span></li>
                            <li><span className='text-gray'>Python</span></li>
                        </ul>
                    </div>
                </div>
                <p>
                    I graduated from the <span className='text-blue bold'>University of Massachusetts Amherst </span>
                    in <span className='bold text-blue'>December 2022</span> with my
                    <span className='bold text-blue'> BS in Computer Science</span> from  achieving a
                    <span className='bold text-blue'> GPA of 3.99</span>. I don't currently have
                    plans to pursue a further degree.
                </p>
                <p>
                    I've had the privilege of work at <span className='bold text-blue'>
                    three different engineering companies</span>. These positions have given me insight
                    into companies of all sizes.
                </p>
                <p>
                    Outside of work I enjoy hiking, reading, and running a YouTube channel
                    called <a href='https://www.youtube.com/@dumb-projects' className='text-blue'>Dumb Projects</a>.
                    Check it out to see some in-dpeth coverage of my personal projects.
                </p>

            </div>
            <div className='col-12 col-lg-5 p-0 d-flex justify-content-center'>
                <div id='image-transition-container'>
                    <div id='image-transition'></div>
                </div>
            </div>
        </div>
    );
}