import {
    Database,
    Layout,
    Server,
    Settings,
    Cloud,
    FlaskConical
} from 'lucide-react';

export interface SkillDiagram {
    name: string;
    category: string;
    score: number;
}

export interface StyleCategory {
    title: string;
    color: string;
    gradient: string;
}

export const skills: Skill[] = [
    {
        title: "Backend",
        category: 'skills.categories.backend',
        icon: Server,
        link: "/skills/backend",
        color: "from-blue-500 to-cyan-500",
        hover: "hover:shadow-blue-500/25",
        desc: "C#/ .NET/ Entity Framework..."
    },
    {
        title: "Frontend",
        category: 'skills.categories.frontend',
        icon: Layout,
        link: "/skills/frontend",
        color: "from-purple-500 to-pink-500",
        hover: "hover:shadow-purple-500/25",
        desc: "Angular/ NodeJs/ TS/ JS.."
    },
    {
        title: "Tests",
        category: 'skills.categories.tests',
        icon: FlaskConical,
        link: "/skills/tests",
        color: "from-emerald-500 to-teal-500",
        hover: "hover:shadow-emerald-500/25",
        desc: "XUnit/ Moq/ Postman.."
    },
    {
        title: "Database",
        category: 'skills.categories.database',
        icon: Database,
        link: "/skills/database",
        color: "from-blue-500 to-cyan-500",
        hover: "hover:shadow-blue-500/25",
        desc: "SQL/ PostgreSQL/ MySQL.."
    },
    {
        title: "DevOps",
        category: 'skills.categories.devops',
        icon: Cloud,
        link: "/skills/devops",
        color: "from-purple-500 to-pink-500",
        hover: "hover:shadow-purple-500/25",
        desc: "Azure DevOps/ Docker/ Git.."
    },
    {
        title: "Architecture",
        category: 'skills.categories.architecture',
        icon: Settings,
        link: "/skills/architecture",
        color: "from-emerald-500 to-teal-500",
        hover: "hover:shadow-emerald-500/25",
        desc: "Repository/ UnitOfWork/ DI.."
    }
];

export const skillsDiagram: SkillDiagram[] = [
    { name: "HTML", category: "frontend", score: 9.5 },
    { name: "CSS", category: "frontend", score: 9.5 },
    { name: "SCSS", category: "frontend", score: 9.5 },
    { name: "JS", category: "frontend", score: 9.0 },
    { name: "TS", category: "frontend", score: 8.5 },
    { name: "Angular", category: "frontend", score: 8.5 },
    { name: "NodeJS", category: "frontend", score: 8.5 },
    { name: "React", category: "frontend", score: 9.2 },
    { name: "Bootstrap", category: "frontend", score: 9.2 },
    { name: "RxJS", category: "frontend", score: 9.2 },
    { name: "Tailwind CSS", category: "frontend", score: 9.5 },

    { name: "C#", category: "backend", score: 9.5 },
    { name: ".NET", category: "backend", score: 9.0 },
    { name: "ASP.NET Core", category: "backend", score: 8.5 },
    { name: ".Net 6", category: "backend", score: 9.2 },
    { name: ".Net 8", category: "backend", score: 9.0 },
    { name: ".Net Framework 3.5", category: "backend", score: 8.5 },
    { name: ".Net Framework 4.8", category: "backend", score: 8.8 },
    { name: "Entity Framework Core", category: "backend", score: 9.5 },
    { name: "Dapper", category: "backend", score: 9.0 },

    { name: "xUnit", category: "tests", score: 9.0 },
    { name: "NUnit", category: "tests", score: 8.0 },
    { name: "Moq", category: "tests", score: 9.0 },
    { name: "FluentAssertions", category: "tests", score: 9.0 },
    { name: "SonarQube", category: "tests", score: 9.0 },
    { name: "Postman", category: "tests", score: 9.5 },
    { name: "Jest", category: "tests", score: 8.5 },
    { name: "Jasmine", category: "tests", score: 8.0 },
    { name: "Playwright", category: "tests", score: 8.2 },
    { name: "ESLint", category: "tests", score: 8.0 },
    { name: "Zeplin", category: "tests", score: 9.0 },

    { name: "SQL", category: "database", score: 9.5 },
    { name: "SQL Server", category: "database", score: 9.0 },
    { name: "PostgreSQL", category: "database", score: 8.5 },
    { name: "MySQL", category: "database", score: 8.0 },
    { name: "SSMS", category: "database", score: 8.5 },
    { name: "DBeaver", category: "database", score: 9.0 },

    { name: "Azure DevOps", category: "devops", score: 9.5 },
    { name: "Azure Blob Storage", category: "devops", score: 9.0 },
    { name: "Docker", category: "devops", score: 8.5 },
    { name: "CI/CD", category: "devops", score: 8.0 },
    { name: "Git/GitLab/GitHub", category: "devops", score: 8.5 },

    { name: "Microservices", category: "architecture", score: 9.5 },
    { name: "Clean Architecture", category: "architecture", score: 9.0 },
    { name: "Decorator", category: "architecture", score: 8.5 },
    { name: "Factory", category: "architecture", score: 8.0 },
    { name: "Strategy", category: "architecture", score: 8.5 },
    { name: "Repository", category: "architecture", score: 9.5 },
    { name: "Unit of Work", category: "architecture", score: 9.0 },
    { name: "DI", category: "architecture", score: 8.5 },

];

export type SkillCategory = "frontend" | "backend" | "tests" | "database" | "devops" | "architecture";