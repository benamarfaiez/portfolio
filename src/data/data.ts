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
