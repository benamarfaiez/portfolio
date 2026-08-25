import { AnimatedSectionProps } from "../components/ui/AnimatedSection";

export interface HeroActionsProps {
  contactText: string;
  downloadCvText: string;
}

export interface HeroAvatarProps {
  src: string;
  alt: string;
  animationProps?: Partial<AnimatedSectionProps>;
}