import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SkillCardProps } from '../../types/skills';

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
    const { t } = useTranslation();

    return (
        <Link to={skill.link} state={{ from: 'list' }} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -12 }}
                className={`group relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-slate-300 dark:border-slate-700 transition-all duration-500 ${skill.hover}`}
            >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative p-10 text-center flex flex-col h-full items-center justify-between">
                    <div>
                        {/* Icon */}
                        <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${skill.color} text-white mb-6 shadow-lg`}>
                            <skill.icon size={48} strokeWidth={2} />
                        </div>

                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                            {skill.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {skill.desc}
                        </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-200 mt-auto">
                        {t('common.view_details')}
                        <ArrowRight
                            size={28}
                            className="transition-transform duration-300 group-hover:translate-x-3"
                        />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default memo(SkillCard);
