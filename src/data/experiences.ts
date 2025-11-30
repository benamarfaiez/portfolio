export interface Projects {
    name: string;
    details: string;
}

export interface Experience {
    id: number;
    slug: string;
    company: string;
    logo: string;
    location: string;
    role: string;
    period: string;
    description: string;
    longDescription?: string;
    missions?: string[];
    challenges?: string;
    solutions?: string;
    results?: string;
    projects: Projects[];
    technologies: string[];
    images?: string[];
    links?: { url: string; label: string }[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        slug: "henner-net-developer",
        company: "Henner",
        logo: "logo-henner.png",
        location: "experience.henner.location",
        role: 'experience.henner.role',
        period: "experience.henner.period",
        description: 'experience.henner.description',
        longDescription: "experience.henner.longDescription",
        missions: [
            "experience.henner.missions.0",
            "experience.henner.missions.1",
            "experience.henner.missions.2",
            "experience.henner.missions.3"
        ],
        challenges: "experience.henner.challenges",
        solutions: "experience.henner.solutions",
        results: "experience.henner.results",
        projects: [
            {
                name: 'experience.henner.projects.push_notification.name',
                details: 'experience.henner.projects.push_notification.details'
            },
            {
                name: 'experience.henner.projects.ring_central.name',
                details: 'experience.henner.projects.ring_central.details'
            },
            {
                name: 'experience.henner.projects.broker.name',
                details: 'experience.henner.projects.broker.details'
            },
            {
                name: 'experience.henner.projects.migration.name',
                details: 'experience.henner.projects.migration.details'
            }
        ],
        technologies: [".NET 8", ".NET 6", "Microservices", "Azure", "SQL Server"],
        images: ["/images/henner-dashboard.png", "/images/henner-arch.png"]
    },
    {
        id: 2,
        slug: "euro-information-fullstack",
        company: "Euro Information",
        logo: "logo-euro-information.png",
        location: "experience.euro_information.location",
        role: 'experience.euro_information.role',
        period: "experience.euro_information.period",
        description: 'experience.euro_information.description',
        longDescription: "experience.euro_information.longDescription",
        missions: [
            "experience.euro_information.missions.0",
            "experience.euro_information.missions.1",
            "experience.euro_information.missions.2"
        ],
        challenges: "experience.euro_information.challenges",
        solutions: "experience.euro_information.solutions",
        results: "experience.euro_information.results",
        projects: [
            {
                name: 'experience.euro_information.projects.pixis.name',
                details: 'experience.euro_information.projects.pixis.details'
            }
        ],
        technologies: ["Angular 12", ".NET 4.8", "C#", "SQL Server", "HTML/CSS"]
    },
    {
        id: 3,
        slug: "canaccord-genuity-developer",
        company: "Canaccord Genuity",
        logo: "logo-cg.jpg",
        location: "experience.canaccord.location",
        role: 'experience.canaccord.role',
        period: "experience.canaccord.period",
        description: 'experience.canaccord.description',
        longDescription: "experience.canaccord.longDescription",
        missions: [
            "experience.canaccord.missions.0",
            "experience.canaccord.missions.1",
            "experience.canaccord.missions.2"
        ],
        challenges: "experience.canaccord.challenges",
        solutions: "experience.canaccord.solutions",
        results: "experience.canaccord.results",
        projects: [
            {
                name: 'experience.canaccord.projects.investment_platform.name',
                details: 'experience.canaccord.projects.investment_platform.details'
            }
        ],
        technologies: ["Angular 13", ".NET Core", "Azure Blob Storage", "SQL Server"]
    },
    {
        id: 4,
        slug: "mapgears-gis-developer",
        company: "Mapgears",
        logo: "logo-mapgears.png",
        location: "experience.mapgears.location",
        role: 'experience.mapgears.role',
        period: "experience.mapgears.period",
        description: 'experience.mapgears.description',
        longDescription: "experience.mapgears.longDescription",
        missions: [
            "experience.mapgears.missions.0",
            "experience.mapgears.missions.1"
        ],
        challenges: "experience.mapgears.challenges",
        solutions: "experience.mapgears.solutions",
        results: "experience.mapgears.results",
        projects: [
            {
                name: 'experience.mapgears.projects.sentinel.name',
                details: 'experience.mapgears.projects.sentinel.details'
            }
        ],
        technologies: ["OpenLayers", "Flask", "PostGIS", "Python", "JavaScript"]
    }
];