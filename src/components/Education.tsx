import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { educations } from '../data/educations';

export default function Education() {
    const { t } = useTranslation();

    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        {t('education.title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {educations.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-slate-700 flex flex-col md:flex-row gap-6 items-start md:items-center"
                        >
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 shrink-0">
                                <GraduationCap size={32} />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {t(edu.degree)}
                                    </h3>
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                                        <Calendar size={14} />
                                        {t(edu.year)}
                                    </span>
                                </div>

                                <h4 className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-2">
                                    {t(edu.school)}
                                </h4>

                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                    <MapPin size={16} />
                                    {t(edu.location)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
