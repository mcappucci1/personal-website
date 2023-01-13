import { SECTIONS } from '../Utils/Data';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import '../Styles/CustomSidebar.scss';

interface Props {
    open: boolean,
    toggleSidebar: () => void
}

export const CustomSidebar = ({ open, toggleSidebar }: Props) => {
    return (
        <>
            <div id='page-cover' className={`${open ? 'd-block' : 'd-none'}`}></div>
            <div id='sidebar-wrapper' className={`py-4 ${open ? 'sidebar-open' : 'sidebar-close' }`}>
                <div className='d-flex justify-content-end px-4'>
                    <button id='close-button' onClick={toggleSidebar}><FontAwesomeIcon icon={faX} /></button>
                </div>
                <div className='mx-auto h-100 text-center d-flex flex-column justify-content-center'>
                    {
                        SECTIONS.map((section, i) => {
                            return (
                                <Nav.Link key={section.name} href={section.name} className='mb-5'>
                                    <div className='text-blue'>{i+1}.</div>
                                    <span className='text-gray'> {section.name}</span>
                                </Nav.Link>
                            );
                        })
                    }
                    <button className='button-dark px-5 py-2'>Resume</button>
                </div>
            </div>
        </>
    );
}