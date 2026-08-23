// components/Education.tsx
import { useTranslation } from 'react-i18next';
import { educations } from '../../data/educations';
import { EducationCard } from './EducationCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { fadeInUpVariants } from '../../animations/aboutVariants';

export default function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animation du Header */}
        <AnimatedSection variants={fadeInUpVariants} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {t('education.title')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </AnimatedSection>

        {/* Liste des cartes d'éducation */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educations.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}