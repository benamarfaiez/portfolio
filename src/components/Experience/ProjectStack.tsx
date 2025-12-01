import { useTranslation } from 'react-i18next';

interface ProjectStackProps {
    technologies: string[];
}

export default function ProjectStack({ technologies }: ProjectStackProps) {
    const { t } = useTranslation();

    return (
        <section id='tech_stack' className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                    >
                        {t(tech)}
                    </span>
                ))}
            </div>
        </section>
    );
}
