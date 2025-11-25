import { motion } from 'framer-motion';
import { Download, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
    return (
        <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase">
                                Portfolio
                            </h2>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{personalInfo.name}</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
                                {personalInfo.title}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                                Développeur passionné avec 5 ans d'expérience dans la création d'applications web performantes et évolutives. Spécialisé en .NET et Angular.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                <a
                                    href="#contact"
                                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                                >
                                    Me contacter <Mail size={18} />
                                </a>
                                <a
                                    href="/cv.pdf" // Placeholder link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-900 dark:text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
                                >
                                    Télécharger CV <Download size={18} />
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                                <img src="./../../public/image_profile.png" alt={personalInfo.name} className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
