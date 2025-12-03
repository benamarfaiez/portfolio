import { motion } from 'framer-motion';
import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Send } from 'lucide-react';
import { personalInfo } from '../data/data';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        // Validate environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSubmitStatus('error');
            setErrorMessage('Configuration EmailJS manquante. Veuillez contacter l\'administrateur.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            setSubmitStatus('success');
            setIsSubmitting(false);

            // Reset form after 2 seconds
            setTimeout(() => {
                formRef.current?.reset();
                setSubmitStatus('idle');
            }, 2000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            setErrorMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        {t('contact.title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                            {t('contact.subtitle')}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            {t('contact.description')}
                        </p>

                        <div className="space-y-6">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                    <p className="font-medium text-slate-900 dark:text-white">{personalInfo.email}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Téléphone</p>
                                    <p className="font-medium text-slate-900 dark:text-white">{personalInfo.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Localisation</p>
                                    <p className="font-medium text-slate-900 dark:text-white">{t('contact.location')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700" style={{ marginTop: '58px' }}>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="name"
                                        name="name"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder={t('contact.form.placeholder.email')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        {t('contact.form.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder={t('contact.form.placeholder.message')}
                                    />
                                </div>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                                        <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                                            ✓ Message envoyé avec succès !
                                        </p>
                                    </div>
                                )}

                                {/* Error Message */}
                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                                        <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                                            ✗ {errorMessage}
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            {t('contact.form.send')} <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
