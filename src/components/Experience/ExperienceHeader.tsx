import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Experience } from '../../data/experiences';

interface ExperienceHeaderProps {
    experience: Experience;
}

export default function ExperienceHeader({ experience }: ExperienceHeaderProps) {
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-300 dark:border-slate-700 mb-8">
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
                {t(experience.description)}
            </p>
        </div>
    );
}
