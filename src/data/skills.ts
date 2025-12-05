import {
    Database,
    Layout,
    Server,
    Settings,
    Cloud,
    FlaskConical
} from 'lucide-react';

export const skills = [
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

export const skillsDiagram = [
    { name: "HTML/CSS", category: "frontend", score: 9.5 },
    { name: "JavaScript", category: "frontend", score: 9.0 },
    { name: "TypeScript", category: "frontend", score: 8.5 },
    { name: "React / Next.js", category: "frontend", score: 9.2 },
    { name: "Tailwind CSS", category: "frontend", score: 9.5 },
    { name: "Node.js", category: "backend", score: 7.2 },
    { name: "Express", category: "backend", score: 6.8 },
    { name: "Python", category: "backend", score: 8.0 },
    { name: "Django", category: "backend", score: 6.5 },
    { name: "Git / GitHub", category: "tools", score: 9.0 },
    { name: "Figma", category: "tools", score: 7.5 },
    { name: "Anglais", category: "tools", score: 8.5 },
];

export type SkillCategory = "frontend" | "backend" | "tests" | "database" | "devops" | "architecture";