import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectNavigationProps {
  currentIndex: number;
  totalProjects: number;
  hasNext: boolean;
  hasPrev: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export function ProjectNavigation({
  currentIndex,
  totalProjects,
  hasNext,
  hasPrev,
  onNext,
  onPrev,
}: ProjectNavigationProps) {
  const { t } = useTranslation();

  if (totalProjects <= 1) return null;

  return (
    <div id="projects_navigation" className="flex w-full items-center justify-end gap-3 sm:w-auto sm:justify-start sm:gap-2">
      <button
        type="button"
        onClick={onPrev}
        disabled={!hasPrev}
        className={`rounded-full p-3 transition-colors sm:p-2 ${
          !hasPrev
            ? 'cursor-not-allowed text-slate-300 dark:text-slate-700'
            : 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30'
        }`}
        aria-label={t('navigation.prev_project', 'Previous project')}
      >
        <ChevronLeft size={24} />
      </button>

      <span className="min-w-[60px] text-center text-base font-medium text-slate-500 sm:text-sm dark:text-slate-400">
        {currentIndex + 1} / {totalProjects}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={!hasNext}
        className={`rounded-full p-3 transition-colors sm:p-2 ${
          !hasNext
            ? 'cursor-not-allowed text-slate-300 dark:text-slate-700'
            : 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30'
        }`}
        aria-label={t('navigation.next_project', 'Next project')}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
