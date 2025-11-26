export interface Projects {
    name: string;
    details: string;
}

export interface Experience {
    id: number;
    company: string;
    location: string;
    role: string;
    period: string;
    description: string;
    projects: Projects[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Henner",
        location: "Nantes",
        role: 'experience.henner.role',
        period: "Nov 2024 - Oct 2025",
        description: 'experience.henner.description',
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
        technologies: [".NET 8", ".NET 6", "Microservices", "Azure", "SQL Server"]
    },
    {
        id: 2,
        company: "Euro Information",
        location: "Nantes",
        role: 'experience.euro_information.role',
        period: "Sept 2022 - Juin 2024",
        description: 'experience.euro_information.description',
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
        company: "Canaccord Genuity",
        location: "Tunis / Remote",
        role: 'experience.canaccord.role',
        period: "Juil 2020 - Août 2022",
        description: 'experience.canaccord.description',
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
        company: "Mapgears",
        location: "Tunis",
        role: 'experience.mapgears.role',
        period: "Fév 2020 - Juin 2020",
        description: 'experience.mapgears.description',
        projects: [
            {
                name: 'experience.mapgears.projects.sentinel.name',
                details: 'experience.mapgears.projects.sentinel.details'
            }
        ],
        technologies: ["OpenLayers", "Flask", "PostGIS", "Python", "JavaScript"]
    }
];