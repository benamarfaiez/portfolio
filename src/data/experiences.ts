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
        location: "experience.henner.location",
        role: 'experience.henner.role',
        period: "experience.henner.period",
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
        location: "experience.euro_information.location",
        role: 'experience.euro_information.role',
        period: "experience.euro_information.period",
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
        location: "experience.canaccord.location",
        role: 'experience.canaccord.role',
        period: "experience.canaccord.period",
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
        location: "experience.mapgears.location",
        role: 'experience.mapgears.role',
        period: "experience.mapgears.period",
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