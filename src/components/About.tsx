import { useTranslation } from 'react-i18next';
import { AnimatedSection } from './ui/AnimatedSection';
import { fadeInUpVariants } from '../animations/aboutVariants';

export default function About() {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="about" variants={fadeInUpVariants} className="bg-slate-50 dark:bg-slate-900/50">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
        {t('about.title')}
      </h2>
      
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
          {t('about.description')}
        </p>
      </div>
    </AnimatedSection>
  );
}