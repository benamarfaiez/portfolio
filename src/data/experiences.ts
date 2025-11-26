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
        role: "Ingénieur Backend",
        period: "Nov 2024 - Oct 2025",
        description: "Développement et maintenance de microservices critiques pour la gestion des notifications et des courtiers.",
        projects: [
            {
                name: "Projet PushNotification",
                details: "Gestion des notifications batch via Airship."
            },
            {
                name: "Projet RingCentral",
                details: "Webhook .NET 6 microservices, appels parallèles, authentification par instance."
            },
            {
                name: "Projet Courtier",
                details: "Refonte de la gestion des tâches payantes."
            },
            {
                name: "Migration .NET",
                details: "Migration massive .NET 6 → .NET 8 de +100 projets avec outil d’automatisation maison."
            }
        ],
        technologies: [".NET 8", ".NET 6", "Microservices", "Azure", "SQL Server"]
    },
    {
        id: 2,
        company: "Euro Information",
        location: "Nantes",
        role: "Ingénieur Full-Stack",
        period: "Sept 2022 - Juin 2024",
        description: "Développement d'outils transverses pour le groupe bancaire.",
        projects: [
            {
                name: "Projet PIXIS",
                details: "Visionneuse universelle de documents (PDF, HTML, vidéo, image) intégrée aux applications bancaires."
            }
        ],
        technologies: ["Angular 12", ".NET 4.8", "C#", "SQL Server", "HTML/CSS"]
    },
    {
        id: 3,
        company: "Canaccord Genuity",
        location: "Tunis / Remote",
        role: "Ingénieur Full-Stack",
        period: "Juil 2020 - Août 2022",
        description: "Développement de plateformes d'investissement pour le marché boursier canadien.",
        projects: [
            {
                name: "Plateforme d’investissement",
                details: "Développement pour CG Direct, Morgan Stanley, Bamboo."
            }
        ],
        technologies: ["Angular 13", ".NET Core", "Azure Blob Storage", "SQL Server"]
    },
    {
        id: 4,
        company: "Mapgears",
        location: "Tunis",
        role: "Stagiaire PFE",
        period: "Fév 2020 - Juin 2020",
        description: "Conception et réalisation d'une application web de visualisation d'images satellites.",
        projects: [
            {
                name: "Visualisation Sentinel-2",
                details: "Application web de visualisation d’images satellites Sentinel-2."
            }
        ],
        technologies: ["OpenLayers", "Flask", "PostGIS", "Python", "JavaScript"]
    }
];