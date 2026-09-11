import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectRealizationItem, Projects } from '../../types/experiences';
import { ProjectNavigation } from '../ui/ProjectNavigation';
import { normalizeRealization } from '../../constantes/realization';
import { RealizationItem } from '../ui/RealizationItem';
import { TechnologyDetailsModal } from '../ui/TechnologyDetailsModal';

interface ProjectDetailsProps {
  project: Projects;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  currentIndex: number;
  totalProjects: number;
}

export default function ProjectDetails({
  project,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  currentIndex,
  totalProjects,
}: ProjectDetailsProps) {
  const { t } = useTranslation();
  const [selectedRealization, setSelectedRealization] = useState<ProjectRealizationItem | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedRealization(null);
  }, []);

  return (
    <>
      <section
        id="projects_details"
        className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6 md:rounded-2xl md:p-8"
      >
        <header className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
            {t(project.name)}
          </h2>

          <ProjectNavigation
            currentIndex={currentIndex}
            totalProjects={totalProjects}
            hasNext={hasNext}
            hasPrev={hasPrev}
            onNext={onNext}
            onPrev={onPrev}
          />
        </header>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 py-1 pl-4">
            <h3 className="font-bold text-slate-600 dark:text-slate-300">
              {t('projects.context_label', 'Contexte :')}
            </h3>

            <p className="ml-10 text-slate-600 dark:text-slate-300">
              {t(project.context)}
            </p>

            <h3 className="mt-10 font-bold text-slate-600 dark:text-slate-300">
              {t('projects.realization_label', 'Prestation réalisée :')}
            </h3>

            <div className="mt-2 space-y-2">
              {project.realization.map((value, index) => {
                const item = normalizeRealization(value);
                return (
                  <RealizationItem
                    key={`${item.name}-${index}`}
                    realization={item}
                    onOpen={setSelectedRealization}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TechnologyDetailsModal
        realization={selectedRealization}
        onClose={handleCloseModal}
      />
    </>
  );
}