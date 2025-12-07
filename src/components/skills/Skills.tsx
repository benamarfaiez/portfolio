import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        {t('skills.title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.title} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;