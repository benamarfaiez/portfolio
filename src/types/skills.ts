import { LucideProps } from "lucide-react";

export interface Skill {
    title: string;
    category: string;
    icon: React.ForwardRefExoticComponent<LucideProps>;
    link: string;
    color: string;
    hover: string;
    desc: string;
}

export interface SkillCardProps {
    skill: Skill;
    index: number;
}

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

export type SkillCategory = "frontend" | "backend" | "tests" | "database" | "devops" | "architecture";