import { SectionTitle } from './SectionTitle';
import { SECTIONS } from '../Utils/Data';
import '../Styles/Section.scss';

interface Props {
    sectionNumber?: number;
    children?: JSX.Element | JSX.Element[];
    className?: string;
}

export const Section = ({ sectionNumber, children, className }: Props) => {
    return (
        <>
            { (sectionNumber != null) && <section id={SECTIONS[sectionNumber].name}></section> }
            <div className={`row justify-content-center ${className}`}>
                <div className='col-12 col-xl-10'>
                    <>
                        { (sectionNumber != null) && <SectionTitle number={sectionNumber+1} section={SECTIONS[sectionNumber!]} /> }
                        { children }
                    </>
                </div>
            </div>
        </>
    );
}