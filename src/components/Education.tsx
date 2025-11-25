import { motion } from 'framer-motion';
import { education, certifications } from '../data';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Formation & Certifications</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold">Formation</h3>
                        </div>

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

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                            <div className="grid gap-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                                            {cert}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
