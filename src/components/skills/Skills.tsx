// src/sections/Skills.tsx (ou où se trouve ta section Skills)
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import {
    ArrowRight,
    Code2,
    Server,
    Wrench,
} from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                >
                    {t('skills.title') || 'Mes Compétences'}
                </motion.h2>

                {/* Les 3 cartes cliquables avec icône */}
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
                                        Voir le détail
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

                {/* Optionnel : petit texte en bas */}
                <p className="text-center mt-16 text-gray-500 dark:text-gray-400">
                    Cliquez sur une catégorie pour voir le niveau détaillé
                </p>
            </div>
        </section>
    );
};

export default Skills;