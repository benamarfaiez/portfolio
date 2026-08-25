import { fadeInUpVariants } from '../../animations/aboutVariants';
import { scaleInVariants } from '../../animations/avatarVariants';
import { personalInfo } from '../../data/data';
import { useHeroContent } from '../../hooks/useHeroContent';
import { AnimatedSection } from '../ui/AnimatedSection';
import { HeroActions } from './HeroActions';
import { HeroAvatar } from './HeroAvatar';
import { HeroBackground } from './HeroBackground';

export default function Hero() {
  const { title, description, contactText, downloadCvText } = useHeroContent();

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 relative overflow-hidden">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Bloc Texte & Actions animé via AnimatedSection */}
          <AnimatedSection
            variants={fadeInUpVariants}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase">
              Portfolio
            </h2>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
              {title}
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {description}
            </p>

            <HeroActions 
              contactText={contactText} 
              downloadCvText={downloadCvText} 
            />
          </AnimatedSection>

          {/* Bloc Avatar animé via AnimatedSection */}
          <AnimatedSection
            variants={scaleInVariants}
            className="flex-1"
          >
            <HeroAvatar 
              src={personalInfo.avatarPath} 
              alt={personalInfo.name} 
            />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}