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
        degree: "Diplôme d’Ingénieur en Informatique",
        school: "École Nationale des Sciences de l’Informatique (ENSI)",
        location: "Manouba, Tunisie",
        year: "2020"
    },
    {
        id: 2,
        degree: "Classes préparatoires Math-Physique",
        school: "Institut Préparatoire aux Études d'Ingénieurs",
        location: "Sfax, Tunisie",
        year: "2017"
    }
];