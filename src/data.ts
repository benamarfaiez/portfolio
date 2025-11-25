import {
    Database,
    Layout,
    Server,
    Settings,
    Cloud
} from 'lucide-react';

export const personalInfo = {
    name: "Faiez BEN AMAR",
    title: "Ingénieur Full-Stack .NET / Angular",
    email: "benamarfaiez@gmail.com",
    phone: "+33 7 51 42 84 60",
    location: "Nantes, France",
    linkedin: "https://www.linkedin.com/in/faiez-ben-amar/",
    about: "Ingénieur Full-Stack passionné avec 5 ans d'expérience dans la conception et le développement d'applications web robustes et évolutives. Expert en écosystème .NET et Angular, avec une solide maîtrise des architectures modernes (Microservices, Clean Architecture) et du Cloud Azure. Je m'efforce de créer des solutions performantes qui répondent aux besoins réels des utilisateurs.",
};

export const experiences = [
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

export const skills = [
    {
        category: "Backend",
        icon: Server,
        items: ["C#", ".NET 8/6/Core", "ASP.NET Web API", "Node.js", "Python", "Entity Framework"]
    },
    {
        category: "Frontend",
        icon: Layout,
        items: ["Angular (12+)", "React", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"]
    },
    {
        category: "Database",
        icon: Database,
        items: ["SQL Server", "PostgreSQL", "MySQL", "Redis"]
    },
    {
        category: "DevOps & Cloud",
        icon: Cloud,
        items: ["Azure DevOps", "Azure Blob Storage", "Docker", "CI/CD", "Git/GitLab/GitHub"]
    },
    {
        category: "Architecture & Testing",
        icon: Settings,
        items: ["Microservices", "Clean Architecture", "xUnit", "NUnit", "Moq", "SonarQube"]
    }
];

export const education = [
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
        location: "Tunisie",
        year: "2017"
    }
];

export const certifications = [
    "React JS",
    "Angular 12 + .NET Core Web API",
    "ASP.NET MVC",
    "Web Security",
    "Pentesting",
    "Git",
    "Agile Methodology"
];
