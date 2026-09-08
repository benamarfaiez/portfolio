import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { experiences as defaultExperiences } from '../../data/experiences';
import { ExperienceNavigatorProps, ExperienceProps } from '../../types/experiences';
import { AnimatedSection } from '../ui/AnimatedSection';
import { fadeInVariants } from '../../animations/experienceVariants';

import { useBackNavigation } from '../../hooks/useBackNavigation';
import { useProjectPagination } from '../../hooks/useProjectPagination';

import ExperienceHeader from './ExperienceHeader';
import ProjectDetails from './ProjectDetails';
import ProjectStack from './ProjectStack';
import ExperienceNavigator from './ExperienceNavigator';
import { ExperienceNotFound } from './ExperienceNotFound';

export default function ExperienceDetail({ items = defaultExperiences }: ExperienceProps) {
  const { slug = '' } = useParams<{ slug: string }>();

  return <ExperienceDetailContent key={slug} currentSlug={slug} items={items} />;
}

function ExperienceDetailContent({ currentSlug, items }: ExperienceNavigatorProps) {
  const { t } = useTranslation();
  const handleBack = useBackNavigation();

  const experience = items?.find((exp) => exp.slug === currentSlug);
  const projects = experience?.projects ?? [];

  const { currentIndex, nextProject, prevProject, hasNext, hasPrev } =
    useProjectPagination(projects.length);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!experience) {
    return <ExperienceNotFound onBack={handleBack} />;
  }

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t('common.back_to_list')}
        </button>

        <AnimatedSection variants={fadeInVariants}>
          {/* Header */}
          <ExperienceHeader experience={experience} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content: Projects */}
            <div className="lg:col-span-2 space-y-8">
              {currentProject && (
                <ProjectDetails
                  project={currentProject}
                  onNext={nextProject}
                  onPrev={prevProject}
                  hasNext={hasNext}
                  hasPrev={hasPrev}
                  currentIndex={currentIndex}
                  totalProjects={projects.length}
                />
              )}
            </div>

            {/* Sidebar: Tech Stack */}
            <div className="space-y-8">
              {currentProject && (
                <ProjectStack technologies={currentProject.technicalEnvironment} />
              )}
            </div>
          </div>

          {/* Bottom Navigator */}
          <ExperienceNavigator currentSlug={experience.slug} items={items} />
        </AnimatedSection>
      </div>
    </div>
  );
}