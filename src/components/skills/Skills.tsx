import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { ArrowRight } from 'lucide-react';

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
                    {skills.map((cat, index) => (
                        <Link to={cat.link} key={cat.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -12 }}
                                className={`group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-500 ${cat.hover}`}
                            >
                                {/* Dégradé de fond animé */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative p-10 text-center">
                                    {/* Icône grande et colorée */}
                                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${cat.color} text-white mb-6 shadow-lg`}>
                                        <cat.icon size={48} strokeWidth={2} />
                                    </div>

                                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                                        {cat.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {cat.desc}
                                    </p>

                                    {/* Flèche qui apparaît au hover */}
                                    <div className="flex justify-center items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-200">
                                        {t('common.view_detail')}
                                        <ArrowRight
                                            size={28}
                                            className="transition-transform duration-300 group-hover:translate-x-3"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;