export type Section = {
    name: string;
    sectionHeader: string;
}

export const SECTIONS: Section[] = [
    { name: 'About', sectionHeader: 'About Me' },
    { name: 'Work', sectionHeader: 'Work Experience' },
    { name: 'Projects', sectionHeader: 'Personal Projects' },
    { name: 'Contact', sectionHeader: 'Contact Information' }
];