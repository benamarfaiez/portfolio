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