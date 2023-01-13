import { SectionType } from '../Utils/Data';

interface Props {
    number: number;
    section: SectionType;
}

export const SectionTitle = ({ number, section }: Props) => {
    return (
        <div className='d-flex justify-content-start align-items-end'>
            <h4 className='text-blue'>{number}.</h4>
            <h3 className='text-gray ms-2'>{section.sectionHeader}</h3>
            <span className='ms-4 w-25 spacer my-auto'></span>
        </div>
    );
}