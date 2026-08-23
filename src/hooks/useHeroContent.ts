import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/data';

export function useHeroContent() {
  const { t } = useTranslation();

  const yearsOfExperience = new Date().getFullYear() - personalInfo.startYear;

  // i18next supporte nativement {{count}} ou {{years}} dans les fichiers JSON (ex: "hero.description": "... {{years}} ans ...")
  const description = t('hero.description', { 
    years: yearsOfExperience, 
    defaultValue: t('hero.description').replace('{{anneesExperience}}', yearsOfExperience.toString()) 
  });

  return {
    title: t('hero.title'),
    description,
    contactText: t('hero.contact'),
    downloadCvText: t('hero.download_cv'),
  };
}