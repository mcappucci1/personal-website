import { Navbar, Nav } from 'react-bootstrap';
import { SECTIONS } from '../Utils/Data';
import { useState, useCallback, useEffect } from 'react';
import { CustomSidebar } from './CustomSidebar';

export const CustomNavbar = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleToggleSidebar = useCallback(() => {
        setOpenSidebar(!openSidebar);
    }, [setOpenSidebar, openSidebar]);

    const handleWindowResize = useCallback(() => {
        console.log(window.innerWidth)
        if (openSidebar && window.innerWidth >= 768){
            setOpenSidebar(false);
        }
    }, [openSidebar]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [handleWindowResize]);

    return (
        <Navbar className='px-5 py-3 blue-bottom-border bg-black' expand='md' sticky='top'>
            <button className='ms-auto navbar-toggler custom-toggle' onClick={handleToggleSidebar}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <CustomSidebar open={openSidebar} toggleSidebar={handleToggleSidebar} />
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