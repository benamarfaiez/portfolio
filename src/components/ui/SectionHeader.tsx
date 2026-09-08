// components/ui/SectionHeader.tsx
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { fadeInVariants } from '../../animations/experienceVariants';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <AnimatedSection
      variants={fadeInVariants}
      viewportOptions={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
    </AnimatedSection>
  );
};