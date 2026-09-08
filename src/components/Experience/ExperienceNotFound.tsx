import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ExperienceNotFoundProps {
  onBack: () => void;
}

export const ExperienceNotFound: React.FC<ExperienceNotFoundProps> = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {t('experience.not_found', { defaultValue: 'Experience not found' })}
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto transition-colors"
        >
          <ArrowLeft size={20} />
          {t('common.back_to_list')}
        </button>
      </div>
    </div>
  );
};