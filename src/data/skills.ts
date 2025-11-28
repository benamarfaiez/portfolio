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
        category: 'skills.categories.backend',
        icon: Server,
        items: ["C#", ".NET", "ASP.NET Core", ".Net (6 et 8)", ".Net Framework (3.5 et 4.8)", "Entity Framework Core", "Dapper"]
    },
    {
        category: 'skills.categories.frontend',
        icon: Layout,
        items: ["Angular", "React", "NodeJs", "Bootstrap", "RxJS", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS"]
    },
    {
        category: 'skills.categories.tests',
        icon: FlaskConical,
        items: ["xUnit", "NUnit", "Moq", "FluentAssertions", "SonarQube", "Postman", "Jest", "Jasmine", "Playwright", "ESLint", "Zeplin"]
    },
    {
        category: 'skills.categories.database',
        icon: Database,
        items: ["SQL", "SQL Server", "PostgreSQL", "MySQL", "SSMS", "Dbvear"]
    },
    {
        category: 'skills.categories.devops',
        icon: Cloud,
        items: ["Azure DevOps", "Azure Blob Storage", "Docker", "CI/CD", "Git/GitLab/GitHub"]
    },
    {
        category: 'skills.categories.architecture',
        icon: Settings,
        items: ["Microservices", "Clean Architecture"]
    }
];
