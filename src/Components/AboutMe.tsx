import { IMAGE_NAMES } from "../images/ImageNames";
import { useState, useEffect } from 'react';

export const AboutMe = () => {

    const [picIndex, setPicIndex] = useState(0);

    useEffect(() => {
        const key = setInterval(() => {
            setPicIndex((picIndex + 1) % IMAGE_NAMES.length);
        }, 3000);
        return () => clearInterval(key);
    }, [picIndex]);

    return (
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
            <div className='col-5 p-0'>
                <img src={require(`../images/${IMAGE_NAMES[picIndex]}`)} alt='im' width='100%' />
            </div>
        </div>
    );
}