import { useTranslation } from 'react-i18next';
import { ContactForm } from './ContactForm';
import { ContactInfoList } from './ContactInfoList';
import { AnimatedSection } from '../ui/AnimatedSection';
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animations/contactVariants';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <AnimatedSection 
          variants={fadeInUp} 
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </AnimatedSection>

        {/* Grille de contenu */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Colonne Gauche : Infos */}
          <AnimatedSection variants={fadeInLeft}>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              {t('contact.subtitle')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t('contact.description')}
            </p>
            <ContactInfoList />
          </AnimatedSection>

          {/* Colonne Droite : Formulaire */}
          <AnimatedSection variants={fadeInRight}>
            <ContactForm />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}