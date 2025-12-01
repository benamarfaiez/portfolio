export interface Projects {
    name: string;
    details: string;
    context: string;
    realization: string[];
    technicalEnvironment: string[];
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
        challenges: "experience.henner.challenges",
        solutions: "experience.henner.solutions",
        results: "experience.henner.results",
        projects: [
            {
                name: 'experience.henner.projects.push_notification.name',
                details: 'experience.henner.projects.push_notification.details',
                context: 'experience.henner.projects.push_notification.context',
                realization: [
                    'experience.henner.projects.push_notification.realization.tache1',
                    'experience.henner.projects.push_notification.realization.tache2',
                    'experience.henner.projects.push_notification.realization.tache3',
                    'experience.henner.projects.push_notification.realization.tache4',
                    'experience.henner.projects.push_notification.realization.tache5',
                    'experience.henner.projects.push_notification.realization.tache6',
                    'experience.henner.projects.push_notification.realization.tache7'
                ],
                technicalEnvironment: ['ASP.net', 'framework 3.5', 'C#', 'HttpWebRequest', 'UnitOfWork', 'RepositoryPattern', 'Logging', 'Airship API', 'Json', 'SQL/MySQL', 'Dbvear', 'Visual Studio', 'Git/GitLab', 'Sharepoint']
            },
            {
                name: 'experience.henner.projects.ring_central.name',
                details: 'experience.henner.projects.ring_central.details',
                context: 'experience.henner.projects.ring_central.context',
                realization: [
                    'experience.henner.projects.ring_central.realization.tache1',
                    'experience.henner.projects.ring_central.realization.tache2',
                    'experience.henner.projects.ring_central.realization.tache3',
                    'experience.henner.projects.ring_central.realization.tache4',
                    'experience.henner.projects.ring_central.realization.tache5',
                    'experience.henner.projects.ring_central.realization.tache6',
                    'experience.henner.projects.ring_central.realization.tache7',
                    'experience.henner.projects.ring_central.realization.tache8',
                    'experience.henner.projects.ring_central.realization.tache9',
                    'experience.henner.projects.ring_central.realization.tache10',
                ],
                technicalEnvironment: ['C#', '.NET 6', 'ASP.NET Core', 'Web API', 'Microservices', 'HttpClientFactory', 'Logging', 'Linq', 'Threading', 'AutoMapper', 'RingCentral', 'FluentValidation', 'Tests : Moq, xUnit (tests unitaires), Postman (tests API), FluentAssertions', 'Contrôle de version : Git, GitLab, CI/CD']
            },
            {
                name: 'experience.henner.projects.broker.name',
                details: 'experience.henner.projects.broker.details',
                context: 'experience.henner.projects.broker.context',
                realization: [
                    'experience.henner.projects.broker.realization.tache1',
                    'experience.henner.projects.broker.realization.tache2',
                    'experience.henner.projects.broker.realization.tache3',
                    'experience.henner.projects.broker.realization.tache4',
                    'experience.henner.projects.broker.realization.tache5',
                    'experience.henner.projects.broker.realization.tache6',
                    'experience.henner.projects.broker.realization.tache7',
                    'experience.henner.projects.broker.realization.tache8',
                ],
                technicalEnvironment: ['.NET 6', 'C#', 'WebApi', 'RestApi', 'Dapper/SqlMapper', 'xUnit', 'Moq', 'FluentMigrator', 'SonarQube', 'AutoMapper', 'SQL/PostgreSQL', 'Pattern Repository, Unit Of Work, Dependency injection, Factory', 'Visual Studio, Postman, Bitbucket, Git/GitLab, Sharepoint']
            },
            {
                name: 'experience.henner.projects.migration.name',
                details: 'experience.henner.projects.migration.details',
                context: 'experience.henner.projects.migration.context',
                realization: [
                    'experience.henner.projects.migration.realization.tache1',
                    'experience.henner.projects.migration.realization.tache2',
                    'experience.henner.projects.migration.realization.tache3.titre',
                    'experience.henner.projects.migration.realization.tache3.sous_tache1',
                    'experience.henner.projects.migration.realization.tache3.sous_tache2',
                    'experience.henner.projects.migration.realization.tache3.sous_tache3',
                    'experience.henner.projects.migration.realization.tache3.sous_tache4',
                    'experience.henner.projects.migration.realization.tache3.sous_tache5',
                    'experience.henner.projects.migration.realization.tache3.sous_tache6',
                    'experience.henner.projects.migration.realization.tache3.sous_tache7',
                    'experience.henner.projects.migration.realization.tache3.sous_tache8',
                    'experience.henner.projects.migration.realization.tache3.sous_tache9',
                    'experience.henner.projects.migration.realization.tache4',
                    'experience.henner.projects.migration.realization.tache5'
                ],
                technicalEnvironment: ['.NET 6', '.NET 8', 'C#', 'LibGit2Sharp', 'ClosedXML', 'Serilog', 'NuGet', 'PowerShell', 'GitLab', 'CI/CD', 'Nexus', 'Xunit', 'AutoMapper']
            }
        ],
        technologies: ["C#", ".NET 6", "Microservices", "Docker", "SQL Server", "PostgreSQL", "MySQL", "Xunit", "GitLab"]
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
        challenges: "experience.euro_information.challenges",
        solutions: "experience.euro_information.solutions",
        results: "experience.euro_information.results",
        projects: [
            {
                name: 'experience.euro_information.projects.pixis.name',
                details: 'experience.euro_information.projects.pixis.details',
                context: 'experience.euro_information.projects.pixis.context',
                realization: ['experience.euro_information.projects.pixis.realization'],
                technicalEnvironment: ["Angular 12", ".NET 4.8", "C#", "SQL Server", "HTML/CSS"]

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
        challenges: "experience.canaccord.challenges",
        solutions: "experience.canaccord.solutions",
        results: "experience.canaccord.results",
        projects: [
            {
                name: 'experience.canaccord.projects.investment_platform.name',
                details: 'experience.canaccord.projects.investment_platform.details',
                context: 'experience.canaccord.projects.investment_platform.context',
                realization: ['experience.canaccord.projects.investment_platform.realization'],
                technicalEnvironment: ['Angular 13', '.NET Core', 'Azure Blob Storage', 'SQL Server']
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
        challenges: "experience.mapgears.challenges",
        solutions: "experience.mapgears.solutions",
        results: "experience.mapgears.results",
        projects: [
            {
                name: 'experience.mapgears.projects.sentinel.name',
                details: 'experience.mapgears.projects.sentinel.details',
                context: 'experience.mapgears.projects.sentinel.context',
                realization: ['experience.mapgears.projects.sentinel.realization'],
                technicalEnvironment: ['OpenLayers', 'Flask', 'PostGIS', 'Python', 'JavaScript']
            }
        ],
        technologies: ["OpenLayers", "Flask", "PostGIS", "Python", "JavaScript"]
    }
];