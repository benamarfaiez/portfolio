import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { experiences } from '../../data/experiences';

interface ExperienceNavigatorProps {
    currentSlug: string;
}

export default function ExperienceNavigator({ currentSlug }: ExperienceNavigatorProps) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const currentIndex = experiences.findIndex((exp) => exp.slug === currentSlug);
    const previousExperience = currentIndex > 0 ? experiences[currentIndex - 1] : null;
    const nextExperience = currentIndex >= 0 && currentIndex < experiences.length - 1
        ? experiences[currentIndex + 1]
        : null;

    if (!previousExperience && !nextExperience) {
        return null;
    }

    const handleNavigate = (slug: string) => {
        navigate(`/experiences/${slug}`, { state: { from: 'detail-nav' } });
    };

    const cardBase =
        'group flex items-center justify-between gap-4 w-full text-left p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all';

    return (
        <div className="mt-12">
            <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {t('experience.navigator.title')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {previousExperience && (
                    <motion.button
                        type="button"
                        onClick={() => handleNavigate(previousExperience.slug)}
                        className={cardBase}
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                        aria-label={t('experience.navigator.previous')}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 flex items-center gap-2">
                                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
                                {t('experience.navigator.previous')}
                            </span>
                            <p className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                                {previousExperience.company}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t(previousExperience.role)}
                            </p>
                            <div className="inline-flex items-center text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 rounded-full">
                                {t(previousExperience.period)}
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-300">
                            <ArrowLeft size={20} />
                        </div>
                    </motion.button>
                )}

                {nextExperience && (
                    <motion.button
                        type="button"
                        onClick={() => handleNavigate(nextExperience.slug)}
                        className={cardBase}
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                        aria-label={t('experience.navigator.next')}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 flex items-center gap-2">
                                {t('experience.navigator.next')}
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                            </span>
                            <p className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                                {nextExperience.company}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t(nextExperience.role)}
                            </p>
                            <div className="inline-flex items-center text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 rounded-full">
                                {t(nextExperience.period)}
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-300">
                            <ArrowRight size={20} />
                        </div>
                    </motion.button>
                )}
            </div>
        </div>
    );
}

