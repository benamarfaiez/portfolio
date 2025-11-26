import {
    Database,
    Layout,
    Server,
    Settings,
    Cloud
} from 'lucide-react';

export const skills = [
    {
        category: 'skills.categories.backend',
        icon: Server,
        items: ["C#", ".NET 8/6/Core", "ASP.NET Web API", "Node.js", "Python", "Entity Framework"]
    },
    {
        category: 'skills.categories.frontend',
        icon: Layout,
        items: ["Angular (12+)", "React", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"]
    },
    {
        category: 'skills.categories.database',
        icon: Database,
        items: ["SQL Server", "PostgreSQL", "MySQL", "Redis"]
    },
    {
        category: 'skills.categories.devops',
        icon: Cloud,
        items: ["Azure DevOps", "Azure Blob Storage", "Docker", "CI/CD", "Git/GitLab/GitHub"]
    },
    {
        category: 'skills.categories.architecture',
        icon: Settings,
        items: ["Microservices", "Clean Architecture", "xUnit", "NUnit", "Moq", "SonarQube"]
    }
];
