import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                        {t('about.title')}
                    </h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t('about.description')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
