import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { certifications } from '../../data/certifications';
import { CertificationItem } from './CertificationItem';
import { splitArrayInHalf } from '../../utils/array';

export default function Certifications() {
  const { t } = useTranslation();

  // Découpage automatique et mémorisé en deux colonnes
  const [leftColumn, rightColumn] = useMemo(
    () => splitArrayInHalf(certifications),
    [certifications]
  );

  const columns = [leftColumn, rightColumn];

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {t('certifications.title')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Grid 2 Colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {columns.map((columnCerts, columnIndex) => (
            <ul 
              key={columnIndex} 
              className="space-y-4 list-disc list-inside marker:text-gray-500"
            >
              {columnCerts.map((cert) => (
                <CertificationItem key={cert.id} certification={cert} />
              ))}
            </ul>
          ))}
        </div>

      </div>
    </section>
  );
}