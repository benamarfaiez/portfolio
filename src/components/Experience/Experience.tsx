import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../../data/experiences';
import ExperienceItem from './ExperienceItem';

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
                            <ExperienceItem key={exp.id} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
