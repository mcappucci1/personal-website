export type Section = {
    name: string;
    link: string;
    sectionHeader: string;
}

export const SECTIONS: Section[] = [
    { name: 'About', link: '#about', sectionHeader: 'About Me' },
    { name: 'Work', link: '#work', sectionHeader: 'Work Experience' },
    { name: 'Projects', link: '#projects', sectionHeader: 'Personal Projects' },
    { name: 'Contact', link: '#contact', sectionHeader: 'Contact Information' }
];