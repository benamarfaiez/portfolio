import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { experiences } from '../../data/experiences';
import ProjectDetails from './ProjectDetails';
import ExperienceHeader from './ExperienceHeader';
import ProjectStack from './ProjectStack';
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
                            <ProjectDetails
                                project={experience.projects[currentProjectIndex]}
                                onNext={nextProject}
                                onPrev={prevProject}
                                hasNext={currentProjectIndex < experience.projects.length - 1}
                                hasPrev={currentProjectIndex > 0}
                                currentIndex={currentProjectIndex}
                                totalProjects={experience.projects.length}
                            />
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Tech Stack */}
                            <ProjectStack technologies={experience.projects[currentProjectIndex].technicalEnvironment} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
