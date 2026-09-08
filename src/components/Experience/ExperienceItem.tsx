import React, { memo } from 'react';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ExperienceItemProps } from '../../types/experiences';
import { AnimatedSection } from '../ui/AnimatedSection';
import { fadeInVariants } from '../../animations/experienceVariants';
import { CompanyLogo } from './CompanyLogo';
import { TechBadgeList } from './TechBadgeList';


const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      variants={fadeInVariants}
      customIndex={index}
      viewportOptions={{ once: true }}
      className={`relative flex flex-col md:flex-row ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3.5 h-3.5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 z-10 mt-1.5 md:mt-0" />

      {/* Content */}
      <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
        <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'}`}>
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-300 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow w-full">
            
            {/* Header section */}
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase size={18} className="text-blue-600" />
                {t(experience.role)}
              </h3>
              
              <div className="flex items-center gap-3">
                <CompanyLogo 
                  src={experience.logo} 
                  alt={`${experience.company} logo`} 
                />
                <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {experience.company}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {t(experience.period)}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {t(experience.location)}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {t(experience.description)}
            </p>

            {/* Technologies */}
            <TechBadgeList technologies={experience.technologies} />

            {/* CTA */}
            <Link
              to={`/experiences/${experience.slug}`}
              state={{ from: 'list' }}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
            >
              {t('common.view_details', { defaultValue: 'View Details' })}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default memo(ExperienceItem);