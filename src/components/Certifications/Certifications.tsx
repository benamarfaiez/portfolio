import { useTranslation } from 'react-i18next';
import { certifications } from '../../data/certifications';
import { CertificationItem } from './CertificationItem';
import { splitArrayInHalf } from '../../utils/array';
import { AnimatedSection } from '../ui/AnimatedSection';
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animations/contactVariants';

// Découpage exécuté une seule fois à l'initialisation du module (hors rendu React)
const [LEFT_COLUMN, RIGHT_COLUMN] = splitArrayInHalf(certifications);
const CERT_COLUMNS = [
  { id: 'left-col', data: LEFT_COLUMN, animation: fadeInLeft },
  { id: 'right-col', data: RIGHT_COLUMN, animation: fadeInRight },
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Header animé */}
        <AnimatedSection variants={fadeInUp} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {t('certifications.title')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </AnimatedSection>

        {/* Grille 2 Colonnes animées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {CERT_COLUMNS.map(({ id, data }) => (
            <ul key={id} className="space-y-4">
              {data.map((cert) => (
                <CertificationItem key={cert.id} certification={cert} />
              ))}
            </ul>
          ))}
        </div>

      </div>
    </section>
  );
}