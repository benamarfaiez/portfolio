import React from 'react';
import { useTranslation } from 'react-i18next';
import { TechBadgeListProps } from '../../types/experiences';

export const TechBadgeList: React.FC<TechBadgeListProps> = ({ technologies }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {technologies.map((tech, idx) => (
        <span
          key={`${tech}-${idx}`}
          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
        >
          {t(tech)}
        </span>
      ))}
    </div>
  );
};