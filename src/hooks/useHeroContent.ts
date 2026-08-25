import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/data';

export function useHeroContent() {
  const { t } = useTranslation();
  const yearsOfExperience = new Date().getFullYear() - personalInfo.startYear;

  return {
    title: t('hero.title'),
    description: t('hero.description', { anneesExperience: yearsOfExperience }),
    contactText: t('hero.contact'),
    downloadCvText: t('hero.download_cv'),
  };
}