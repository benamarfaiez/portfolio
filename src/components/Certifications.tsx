import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 group"
                            aria-label={`Voir la certification ${cert.title} de ${cert.issuer}`}
                        >
                            {/* External Link Icon */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>

                            {/* Certification Info */}
                            <div className="space-y-2 flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400 font-medium">
                                        {cert.issuer}
                                    </span>
                                </div>

                                <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                                    <span>{cert.date}</span>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
