import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('experience.title')}</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3.5 h-3.5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 z-10 mt-1.5 md:mt-0" />

                                {/* Content */}
                                <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow w-full">
                                            <div className="flex flex-col gap-2 mb-4">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                    <Briefcase size={18} className="text-blue-600" />
                                                    {t(exp.role)}
                                                </h3>
                                                <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                                                    {exp.company}
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {t(exp.period)}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {t(exp.location)}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                                {t(exp.description)}
                                            </p>

                                            <div className="space-y-3 mb-6">
                                                {exp.projects.map((project, idx) => (
                                                    <div key={idx} className="pl-4 border-l-2 border-blue-100 dark:border-blue-900">
                                                        <h4 className="font-medium text-slate-900 dark:text-white text-sm">
                                                            {t(project.name)}
                                                        </h4>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                                            {t(project.details)}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                                                    >
                                                        {t(tech)}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link
                                                to={`/experiences/${exp.slug}`}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                                            >
                                                {t('common.view_details') || "View Details"}
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
