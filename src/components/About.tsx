import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { Code2, Database, Layout, Server } from 'lucide-react';

export default function About() {
    const highlights = [
        { icon: Server, label: "Backend .NET", value: "5 ans" },
        { icon: Layout, label: "Frontend Angular", value: "Expert" },
        { icon: Database, label: "Architecture", value: "Clean Arch" },
        { icon: Code2, label: "Qualité Code", value: "SonarQube" },
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                            Ingénieur Full-Stack passionné
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            {personalInfo.about}
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Basé à {personalInfo.location}, je suis toujours à la recherche de nouveaux défis techniques.
                            Mon approche combine rigueur technique et créativité pour livrer des solutions qui font la différence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
                            >
                                <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                                <h4 className="font-semibold text-slate-900 dark:text-white">{item.label}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
