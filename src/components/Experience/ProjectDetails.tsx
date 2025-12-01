import { useTranslation } from 'react-i18next';
import { Projects } from '../../data/experiences';

interface ProjectDetailsProps {
    project: Projects;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const { t } = useTranslation();

    return (
        <section id="projects_details" className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Projects</h2>
            <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4 py-1">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                        {t(project.name)}
                    </h3>
                    <h3 className=" font-bold text-slate-600 dark:text-slate-300">
                        Contexte :
                    </h3>
                    <p className="ml-10 text-slate-600 dark:text-slate-300">
                        {t(project.context)}
                    </p>
                    <h3 className="font-bold text-slate-600 dark:text-slate-300">
                        Prestation réalisée :
                    </h3>
                    {project.realization.map((value, item) =>
                        <p className="ml-10 text-slate-600 dark:text-slate-300" key={item}>{t(value)}</p>
                    )}
                </div>
            </div>
        </section>
    );
}
