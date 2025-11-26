import { certifications } from '../data/certifications';

export default function Certifications() {
    const leftColumn = certifications.filter(c => c.column === 'left');
    const rightColumn = certifications.filter(c => c.column === 'right');

    return (
        <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">

                <div className="mb-16 text-center" style={{ opacity: 1, transform: 'none' }}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Certifications
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Grid 2 Colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">

                    {/* Colonne Gauche */}
                    <ul className="space-y-2 list-disc list-inside marker:text-gray-500">
                        {leftColumn.map((cert) => (
                            <li key={cert.id} className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{cert.title}</a>
                                <p className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400" style={{ marginLeft: '21px' }}>
                                    {cert.issuer} - {cert.date}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* Colonne Droite */}
                    <ul className="space-y-2 list-disc list-inside marker:text-gray-500">
                        {rightColumn.map((cert) => (
                            <li key={cert.id} className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{cert.title}</a>
                                <p className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400" style={{ marginLeft: '21px' }}>
                                    {cert.issuer} - {cert.date}
                                </p>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
}
