import { useTranslation } from 'react-i18next';
import { X, Cpu } from 'lucide-react';
import { ProjectRealizationItem } from '../../types/experiences';
import { useModalDialog } from '../../hooks/useModal';

interface TechnologyDetailsModalProps {
  realization: ProjectRealizationItem | null;
  onClose: () => void;
}

export function TechnologyDetailsModal({ realization, onClose }: TechnologyDetailsModalProps) {
  const { t } = useTranslation();
  const dialogRef = useModalDialog(Boolean(realization), onClose);

  if (!realization) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="modal-tech-title"
      className="fixed inset-0 z-50 m-auto flex max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-0 shadow-2xl backdrop:bg-slate-950/60 backdrop:backdrop-blur-md sm:w-full dark:border-slate-800/80 dark:bg-slate-900/95"
    >
      {/* Header Sticky */}
      <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white/80 px-5 py-4 backdrop-blur-md sm:px-6 dark:border-slate-800 dark:bg-slate-900/80">
        <div className="min-w-0 flex-1 pr-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              <Cpu size={14} aria-hidden="true" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t('modal.why_technology', 'Pourquoi cette technologie ?')}
            </p>
          </div>
          <h3
            id="modal-tech-title"
            className="mt-1.5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-slate-100"
          >
            {t(realization.name)}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label={t('common.close', 'Fermer')}
        >
          <X size={18} />
        </button>
      </div>

      {/* Body scrollable */}
      <div className="flex-1 overflow-y-auto p-5 sm:p-6 [scrollbar-color:theme(colors.slate.300)_transparent] dark:[scrollbar-color:theme(colors.slate.700)_transparent]">
        <div className="space-y-5">
          {realization.description && (
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {t(realization.description)}
            </p>
          )}

          {realization.image && (
            <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/50 p-2 shadow-inner dark:border-slate-800 dark:bg-slate-950/40">
              <img
                src={realization.image}
                alt={t(realization.name)}
                className="max-h-[45vh] w-full rounded-lg object-contain transition-transform duration-300 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>

      {/* Footer Sticky */}
      <div className="sticky bottom-0 z-10 flex justify-end border-t border-slate-100 bg-slate-50/50 px-5 py-3.5 backdrop-blur-md sm:px-6 dark:border-slate-800 dark:bg-slate-900/50">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus-visible:ring-offset-slate-900"
        >
          {t('common.close', 'Fermer')}
        </button>
      </div>
    </dialog>
  );
}