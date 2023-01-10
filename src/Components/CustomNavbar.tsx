import { Navbar, Nav } from 'react-bootstrap';
import { SECTIONS } from '../Utils/Data';

export const CustomNavbar = () => {
    return (
        <Navbar className='px-5 py-3 blue-bottom-border' expand='md' sticky='top'>
            <button className='ms-auto navbar-toggler custom-toggle .navbar-toggler-icon'>
                <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <div className='d-flex me-4'>
                    {
                        SECTIONS.map((section, i) => {
                            return (
                                <Nav.Link key={section.name} href={section.link} className='me-2'>
                                    <span className='text-blue'>{i+1}.</span>
                                    <span className='text-gray'> {section.name}</span>
                                </Nav.Link>
                            );
                        })
                    }
                    </div>
                    <button className='button-dark'>Resume</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}