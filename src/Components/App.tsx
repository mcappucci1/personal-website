import { CustomNavbar } from './CustomNavbar';
import { SectionTitle } from './SectionTitle';
import { SECTIONS } from '../Utils/Data';

export const App = () => {
    return (
        <>
            <CustomNavbar />
            <div className='container h-100'>
                <div className='row h-100 justify-content-center'>
                    <div className='h-75 col-12 col-md-10 d-flex justify-content-center align-items-center '>
                        <div className='h-75'>
                            <h5 className='text-blue'>Hi, my name is</h5>
                            <h1 className='display-1 text-gray'>Matthew Cappucci.</h1>
                            <h1 className='display-1 text-dark-gray mb-5'>I build dumb software projects.</h1>
                            <h5 className='text-gray'>
                                I am a recent graudate software engineer who specializes <br />
                                in building web based projects. I am current focusing my <br />
                                efforts towards expanding my skills into technologies outside <br />
                                web development (i.e. machine learning)
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='row h-100 justify-content-center'>
                    <div className='h-75 col-12 col-md-10'>
                        <SectionTitle number={1} section={SECTIONS[0]} />
                        <div className='row mt-4'>
                            <div className='col-7'>
                                <p className='text-gray'>
                                    Hi! My name is Matt. I enjoy working on <span className='bold text-blue'>
                                    difficult technical projects</span>. My interest in tech started in
                                    highschool when I was allowed to tour an office that produced medical devices.
                                    I began college as an <span className='bold text-blue'>electrical engineering
                                    </span>, but quickly found myself switching to the 
                                    <span className='bold text-blue'> computer science</span> path.
                                    The rest is history.

                                    <br /><br />
                                    
                                    I graudated with my <span className='bold text-blue'>BS in Computer Science</span> from
                                    the <span className='text-blue bold'>University of Massachusetts Amherst </span>
                                    in <span className='bold text-blue'>December 2022</span> with a
                                    <span className='bold text-blue'> GPA of 3.99</span>. I don't currently have
                                    plans to pursue a further degree.

                                    <br /><br />

                                    I have had the priveledge to work at <span className='bold text-blue'>
                                    three different engineering companies</span> ranging from 10 employees to
                                    115,000 employees.

                                    <br /><br />

                                    I have recent experience with the follow technoliges:
                                    <div className='row mt-2'>
                                        <div className='col-5'>
                                            <ul>
                                                <li>HTML & CSS</li>
                                                <li>React & Redux</li>
                                                <li>TypeScript</li>
                                            </ul>
                                        </div>
                                        <div className='col-5'>
                                            <ul>
                                                <li>JavaScript</li>
                                                <li>C#</li>
                                                <li>Python</li>
                                            </ul>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <div className='col-5'>
                                <img
                                    src={require('../images/profile.jpg')}
                                    alt='not found'
                                    width='400px'
                                    height='200px'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='h-25'></div>
                </div>
            </div>
        </>
    );
}