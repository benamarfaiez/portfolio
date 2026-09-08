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

export interface ExperienceNavigatorProps {
  currentSlug: string;
  items?: Experience[];
}

export interface NavigatorCardProps {
  experience: Experience;
  direction: 'previous' | 'next';
  onNavigate: (slug: string) => void;
}

export interface ExperienceItemProps {
    experience: Experience;
    index: number;
}

export interface CompanyLogoProps {
  src?: string;
  alt: string;
}

export interface TechBadgeListProps {
  technologies: string[];
}

export interface ExperienceProps {
  items?: Experience[];
}

export interface ExperienceHeaderProps {
    experience: Experience;
}