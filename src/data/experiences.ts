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
        technologies: ["C#", ".NET 6", "Microservices", "Docker", "SQL", "Xunit", "GitLab"]
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
        challenges: "experience.euro_information.challenges",
        solutions: "experience.euro_information.solutions",
        results: "experience.euro_information.results",
        projects: [
            {
                name: 'experience.euro_information.projects.pixis.name',
                details: 'experience.euro_information.projects.pixis.details',
                context: 'experience.euro_information.projects.pixis.context',
                realization: [
                    'experience.euro_information.projects.pixis.realization.tache1',
                    'experience.euro_information.projects.pixis.realization.tache2',
                    'experience.euro_information.projects.pixis.realization.tache3',
                    'experience.euro_information.projects.pixis.realization.tache4',
                    'experience.euro_information.projects.pixis.realization.tache5',
                    'experience.euro_information.projects.pixis.realization.tache6',
                    'experience.euro_information.projects.pixis.realization.tache7',
                    'experience.euro_information.projects.pixis.realization.tache8',
                    'experience.euro_information.projects.pixis.realization.tache9',
                    'experience.euro_information.projects.pixis.realization.tache10',
                    'experience.euro_information.projects.pixis.realization.tache11',
                    'experience.euro_information.projects.pixis.realization.tache12',
                    'experience.euro_information.projects.pixis.realization.tache13',
                    'experience.euro_information.projects.pixis.realization.tache14',
                    'experience.euro_information.projects.pixis.realization.tache15'
                ],
                technicalEnvironment: ['ASP.net', 'framework 4.8', 'C#', 'Entity Framework', 'API REST', 'IIS', 'NUnit', 'SQL Server', 'SSMS', 'Angular12', 'Bootstrap', 'RxJS', 'TypeScript', 'JavaScript', 'Css/Scss', 'HTML', 'PDF.js', 'Ngx-Videogular', 'Jasmine', 'Json', 'Visual Studio', 'Visual Studio code', 'Postman', 'TFS', 'Bitbucket', 'GitLab', 'Sharepoint', 'Zeplin']
            }
        ],
        technologies: ["Angular 12", ".NET framework 4.8", "C#", "SQL Server", "Azure"]
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
        challenges: "experience.canaccord.challenges",
        solutions: "experience.canaccord.solutions",
        results: "experience.canaccord.results",
        projects: [
            {
                name: 'experience.canaccord.projects.investment_platform.name',
                details: 'experience.canaccord.projects.investment_platform.details',
                context: 'experience.canaccord.projects.investment_platform.context',
                realization: [
                    'experience.canaccord.projects.investment_platform.realization.tache1',
                    'experience.canaccord.projects.investment_platform.realization.tache2',
                    'experience.canaccord.projects.investment_platform.realization.tache3',
                    'experience.canaccord.projects.investment_platform.realization.tache4',
                    'experience.canaccord.projects.investment_platform.realization.tache5',
                    'experience.canaccord.projects.investment_platform.realization.tache6',
                    'experience.canaccord.projects.investment_platform.realization.tache7',
                    'experience.canaccord.projects.investment_platform.realization.tache8',
                    'experience.canaccord.projects.investment_platform.realization.tache9',
                    'experience.canaccord.projects.investment_platform.realization.tache10',
                    'experience.canaccord.projects.investment_platform.realization.tache11',
                    'experience.canaccord.projects.investment_platform.realization.tache12',
                    'experience.canaccord.projects.investment_platform.realization.tache13',
                    'experience.canaccord.projects.investment_platform.realization.tache14'
                ],
                technicalEnvironment: ['ASP.net core', 'C#', 'Entity Framework', 'LINQ', 'SQL server', 'Xunit', 'Jasmine/Karma', 'Azure Devops', 'Blob Storage', 'Visual Studio', 'VS code', 'Postman', 'Jira', 'Bitbucket', 'SourceTree', 'Zeplin', 'Angular13', 'Bootstrap', 'RxJS', 'TS', 'JS', 'Scss/Css', 'HTML', 'Json']
            }
        ],
        technologies: ["Angular 13", ".NET Core 3.1", "Azure Blob Storage", "SQL Server"]
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
        challenges: "experience.mapgears.challenges",
        solutions: "experience.mapgears.solutions",
        results: "experience.mapgears.results",
        projects: [
            {
                name: 'experience.mapgears.projects.sentinel.name',
                details: 'experience.mapgears.projects.sentinel.details',
                context: 'experience.mapgears.projects.sentinel.context',
                realization: [
                    'experience.mapgears.projects.sentinel.realization.tache1',
                    'experience.mapgears.projects.sentinel.realization.tache2',
                    'experience.mapgears.projects.sentinel.realization.tache3',
                    'experience.mapgears.projects.sentinel.realization.tache4',
                    'experience.mapgears.projects.sentinel.realization.tache5',
                    'experience.mapgears.projects.sentinel.realization.tache6',
                    'experience.mapgears.projects.sentinel.realization.tache7',
                    'experience.mapgears.projects.sentinel.realization.tache8'
                ],
                technicalEnvironment: ['Python 3.8', 'Open Layers', 'MapServer', 'GDAL/OGR', 'Geojson', 'Flask', 'OpenStreetMap', 'SENTINEL-2', 'GitHub', 'PostgreSQL', 'PostGIS']
            }
        ],
        technologies: ["Python 3.8", "OpenLayers", "Flask", "PostGIS", "JavaScript"]
    },
    {
        id: 5,
        slug: "zeta-box-developer",
        company: "zeta-Box",
        logo: "logo-zetaBox.png",
        location: "experience.zetaBox.location",
        role: 'experience.zetaBox.role',
        period: "experience.zetaBox.period",
        description: 'experience.zetaBox.description',
        challenges: "experience.zetaBox.challenges",
        solutions: "experience.zetaBox.solutions",
        results: "experience.zetaBox.results",
        projects: [
            {
                name: 'experience.zetaBox.projects.iot.name',
                details: 'experience.zetaBox.projects.iot.details',
                context: 'experience.zetaBox.projects.iot.context',
                realization: [
                    'experience.zetaBox.projects.iot.realization.tache1',
                    'experience.zetaBox.projects.iot.realization.tache2',
                    'experience.zetaBox.projects.iot.realization.tache3',
                    'experience.zetaBox.projects.iot.realization.tache4',
                    'experience.zetaBox.projects.iot.realization.tache5',
                    'experience.zetaBox.projects.iot.realization.tache6',
                    'experience.zetaBox.projects.iot.realization.tache7',
                    'experience.zetaBox.projects.iot.realization.tache8'
                ],
                technicalEnvironment: ["Angular 8", "NodeJS", "TR-369", "JavaScript", "STOMP", "RabbitMQ", "IoT", "Rasbery Pi"]
            }
        ],
        technologies: ["Angular 8", "NodeJS", "TR-369", "JavaScript", "STOMP", "RabbitMQ", "IoT", "Rasbery Pi"]
    }
];