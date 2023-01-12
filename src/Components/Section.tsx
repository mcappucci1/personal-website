import { SectionTitle } from './SectionTitle';
import { SECTIONS } from '../Utils/Data';

interface Props {
    children: JSX.Element;
}

export const Section = ({ children }: Props) => {
    return (
        <>
            <section id='test'></section>
            <div className='full-view-height row justify-content-center'>
                <div className='col-12 col-xl-10'>
                    <SectionTitle number={1} section={SECTIONS[0]} />
                    {children}
                </div>
            </div>
        </>
    );
}