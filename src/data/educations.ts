export interface Education {
    id: number;
    degree: string;
    school: string;
    location: string;
    year: string;
}

export const educations: Education[] = [
    {
        id: 1,
        degree: 'education.ensi.degree',
        school: 'education.ensi.school',
        location: 'education.ensi.location',
        year: "2020"
    },
    {
        id: 2,
        degree: 'education.prepa.degree',
        school: 'education.prepa.school',
        location: 'education.prepa.location',
        year: "2017"
    }
];