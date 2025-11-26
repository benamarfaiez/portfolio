import { motion } from 'framer-motion';
import { education } from '../data/data';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Formation</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-blue-600 rounded-full" />
                                    <div className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                                        {edu.year}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                                        {edu.school}
                                    </p>
                                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                                        {edu.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
