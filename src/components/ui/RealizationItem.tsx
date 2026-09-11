import { ChevronRight, CheckCircle2, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ProjectRealizationItem } from '../../types/experiences';
import { isSubTask } from '../../constantes/realization';

interface RealizationItemProps {
  realization: ProjectRealizationItem;
  onOpen: (item: ProjectRealizationItem) => void;
}

export function RealizationItem({ realization, onOpen }: RealizationItemProps) {
  const { t } = useTranslation();
  const hasDetails = Boolean(realization.description || realization.image);
  const subTask = isSubTask(realization.name);

  return (
    <div className="ml-10 flex items-start gap-2">
      {subTask ? (
        <span className="ml-5">
          <ChevronRight size={16} className="mt-1 flex-shrink-0 text-blue-600" />
        </span>
      ) : (
        <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-blue-600" />
      )}

      <div className="min-w-0 flex-1">
        <p className="text-slate-600 dark:text-slate-300">{t(realization.name)}
            {hasDetails && (
            <button
                type="button"
                onClick={() => onOpen(realization)}
                className="mt-2 inline-flex items-center gap-1 rounded-md text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                aria-label={t('common.learn_more_about', { defaultValue: 'En savoir plus sur {{name}}', name: t(realization.name) })}
            >
                <Info size={14} />
                {t('common.learn_more', 'En savoir plus')}
            </button>
            )}
        </p>
      </div>
    </div>
  );
}