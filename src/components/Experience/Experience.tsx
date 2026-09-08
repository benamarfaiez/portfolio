import { useTranslation } from 'react-i18next';
import { experiences as defaultExperiences } from '../../data/experiences';
import { ExperienceProps } from '../../types/experiences';
import ExperienceItem from './ExperienceItem';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineLine } from './TimelineLine';

export default function Experience({ items = defaultExperiences }: ExperienceProps) {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t('experience.title')} />

        <div className="relative">
          <TimelineLine />

          <div className="space-y-12">
            {items.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}