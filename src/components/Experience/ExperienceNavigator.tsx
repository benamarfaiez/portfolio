import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { experiences as defaultExperiences } from '../../data/experiences';
import { ExperienceNavigatorProps } from '../../types/experiences';
import { useAdjacentExperiences } from '../../hooks/useAdjacentExperiences';
import { NavigatorCard } from './NavigatorCard';

export default function ExperienceNavigator({
  currentSlug,
  items = defaultExperiences,
}: ExperienceNavigatorProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { previousExperience, nextExperience } = useAdjacentExperiences(currentSlug, items);

  const handleNavigate = useCallback(
    (slug: string) => {
      navigate(`/experiences/${slug}`, { state: { from: 'detail-nav' } });
    },
    [navigate]
  );

  if (!previousExperience && !nextExperience) {
    return null;
  }

  return (
    <nav className="mt-12" aria-label={t('experience.navigator.title')}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {t('experience.navigator.title')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {previousExperience ? (
          <NavigatorCard
            experience={previousExperience}
            direction="previous"
            onNavigate={handleNavigate}
          />
        ) : <div className="hidden md:block" />}

        {nextExperience && (
          <NavigatorCard
            experience={nextExperience}
            direction="next"
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </nav>
  );
}