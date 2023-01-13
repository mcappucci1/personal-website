import { CustomNavbar } from './CustomNavbar';
import { Section } from './Section/Section';
import { Title } from './SectionContent/Title';
import { AboutMe } from './SectionContent/AboutMe';
import { WorkExperience } from './SectionContent/WorkExperience';
import '../Styles/App.scss';

export const App = () => {
    return (
        <>
            <CustomNavbar />
            <div className='container'>
                <Section className='align-items-center full-view-height'>
                    <Title />
                </Section>
                <Section sectionNumber={0}>
                    <AboutMe />
                    <div className='empty-quarter'></div>
                </Section>
                <Section sectionNumber={1}>
                    <WorkExperience /> 
                    <div className='empty-quarter'></div>
                </Section>
            </div>
        </>
    );
}