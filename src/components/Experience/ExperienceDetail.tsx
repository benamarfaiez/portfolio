import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { experiences } from '../../data/experiences';
import ProjectDetails from './ProjectDetails';
import ExperienceHeader from './ExperienceHeader';
import { useEffect, useState } from 'react';

export default function ExperienceDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const experience = experiences.find(exp => exp.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const nextProject = () => {
        if (experience && currentProjectIndex < experience.projects.length - 1) {
            setCurrentProjectIndex(prev => prev + 1);
        }
    };

    const prevProject = () => {
        if (currentProjectIndex > 0) {
            setCurrentProjectIndex(prev => prev - 1);
        }
    };

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
                    <ExperienceHeader experience={experience} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Projects */}
                            <ProjectDetails project={experience.projects[currentProjectIndex]} />
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    onClick={prevProject}
                                    disabled={currentProjectIndex === 0}
                                    className={`p-2 rounded-full transition-colors ${currentProjectIndex === 0
                                        ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                                        : 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30'
                                        }`}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    Project {currentProjectIndex + 1} of {experience.projects.length}
                                </span>
                                <button
                                    onClick={nextProject}
                                    disabled={currentProjectIndex === experience.projects.length - 1}
                                    className={`p-2 rounded-full transition-colors ${currentProjectIndex === experience.projects.length - 1
                                        ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                                        : 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30'
                                        }`}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Tech Stack */}
                            <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
                                <div className="flex flex-wrap gap-2">
                                    {experience.projects[currentProjectIndex].technicalEnvironment.map((tech, idx) => (
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
