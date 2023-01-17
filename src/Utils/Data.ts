export type SectionType = {
    name: string;
    sectionHeader: string;
};

export const SECTIONS: SectionType[] = [
    { name: 'About', sectionHeader: 'About Me' },
    { name: 'Work', sectionHeader: 'Work Experience' },
    { name: 'Projects', sectionHeader: 'Personal Projects' },
    { name: 'Contact', sectionHeader: 'Contact Information' }
];

export type Job = {
    title: string;
    companyName: string;
    date: string;
    bulletPoints: string[];
};

export const JOBS: Job[] = [
    {
        title: 'Software Engineer',
        companyName: 'Lockheed Martin',
        date: 'January 2023 - Present',
        bulletPoints: [
            'Don\'t know yet'
        ]
    },
    {
        title: 'Software Engineer Intern',
        companyName: 'Palantir',
        date: 'May 2022 - August 2022',
        bulletPoints: [
            'Constructed frontend portion of new real-time location projection tool within core tile map web application using React and Redux',
            'Created additional functionality in GeoTime search area designation tool to accommodate more complex geometries by leveraging React, SVG, and GeoJson',
            'Partnered with multiple client-facing teams to provide support for high side frontend bugs',
            'Organized and scoped projects, giving demonstrations to internal product teams and external clients'
        ]
    },
    {
        title: 'Software Engineer Intern',
        companyName: 'BlueCreek Software',
        date: 'May 2021 - January 2022, December 2022 - Present',
        bulletPoints: [
            'Constructed email import application using .NET 6.0 C# windows service, desktop appilcation, MSSQL database, and blazor server.',
            'Built automated data pipeline for integrating company\'s core product with third party accounting software using .NET Core C# console application',
            'Implemented PRTG monitoring and improved error handling to reduce data import failures by 70% in .NET Framework email processing applications',
        ]
    },
]