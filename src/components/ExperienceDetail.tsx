import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Briefcase, CheckCircle, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { experiences } from '../data/experiences';
import { useEffect } from 'react';

export default function ExperienceDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const experience = experiences.find(exp => exp.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Experience not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto"
                    >
                        <ArrowLeft size={20} />
                        {t('common.back_to_list')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    {t('common.back_to_list')}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                    {t(experience.role)}
                                </h1>
                                <div className="flex items-center gap-3">
                                    {experience.logo && (
                                        <img
                                            src={'../' + experience.logo}
                                            alt={`${experience.company} logo`}
                                            className="h-8 object-contain rounded-md p-0.5"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    )}
                                    <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                                        {experience.company}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    {t(experience.period)}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    {t(experience.location)}
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            {t(experience.longDescription || experience.description)}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Projects */}
                            <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Projects</h2>
                                <div className="space-y-6">
                                    {experience.projects.map((project, idx) => (
                                        <div key={idx} className="border-l-4 border-blue-600 pl-4 py-1">
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                                                {t(project.name)}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-300">
                                                <span className="font-bold">Contexte : </span>{t(project.context)}
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-300">
                                                <span className="font-bold">Prestation réalisée : </span>
                                                {t(project.realization)}
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-300">
                                                <span className="font-bold">Environnement technique : </span>
                                                {t(project.technicalEnvironment)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Tech Stack */}
                            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                                        >
                                            {t(tech)}
                                        </span>
                                    ))}
                                </div>
                            </section>
                            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                                        >
                                            {t(tech)}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
