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