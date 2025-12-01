import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Projects } from '../../data/experiences';

interface ProjectDetailsProps {
    project: Projects;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
    currentIndex: number;
    totalProjects: number;
}

export default function ProjectDetails({
    project,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
    currentIndex,
    totalProjects
}: ProjectDetailsProps) {
    const { t } = useTranslation();

    return (
        <section id="projects_details" className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t(project.name)}
                </h2>
                <div className="flex items-center gap-4">
                    <button
                        onClick={onPrev}
                        disabled={!hasPrev}
                        className={`p-2 rounded-full transition-colors ${!hasPrev
                            ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                            : 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30'
                            }`}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {currentIndex + 1} / {totalProjects}
                    </span>
                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`p-2 rounded-full transition-colors ${!hasNext
                            ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                            : 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30'
                            }`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4 py-1">
                    <h3 className=" font-bold text-slate-600 dark:text-slate-300">
                        Contexte :
                    </h3>
                    <p className="ml-10 text-slate-600 dark:text-slate-300">
                        {t(project.context)}
                    </p>
                    <h3 className="mt-10 font-bold text-slate-600 dark:text-slate-300">
                        Prestation réalisée :
                    </h3>
                    <div className="space-y-2 mt-2">
                        {project.realization.map((value, item) =>
                            <div className="flex items-start gap-2 ml-10" key={item}>
                                <CheckCircle2 size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                                <p className="text-slate-600 dark:text-slate-300">{t(value)}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
