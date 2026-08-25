import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { EducationCardProps } from '../../types/education';
import { AnimatedSection } from '../ui/AnimatedSection';
import { cardSlideVariants } from '../../animations/educationVariants';

export function EducationCard({ education, index }: EducationCardProps) {
  const { t } = useTranslation();

  return (
    <AnimatedSection
      variants={cardSlideVariants}
      customIndex={index}
      className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-300 dark:border-slate-700 flex flex-col md:flex-row gap-6 items-start md:items-center"
    >
      {/* Icône */}
      <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 shrink-0">
        <GraduationCap size={32} aria-hidden="true" />
      </div>

      {/* Contenu */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {t(education.degree)}
          </h3>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium w-fit">
            <Calendar size={14} aria-hidden="true" />
            {t(education.year)}
          </span>
        </div>

        <h4 className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-2">
          {t(education.school)}
        </h4>

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
          <MapPin size={16} aria-hidden="true" />
          {t(education.location)}
        </div>
      </div>
    </AnimatedSection>
  );
}