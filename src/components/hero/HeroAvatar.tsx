import { avatarVariants } from '../../animations/avatarVariants';
import { HeroAvatarProps } from '../../types/hero';
import { AnimatedSection } from '../ui/AnimatedSection';

export function HeroAvatar({ src, alt, animationProps }: HeroAvatarProps) {
  return (
    <div className="flex-1 relative">
      <AnimatedSection
        variants={avatarVariants}
        className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
        {...animationProps}
      >
        {/* Glow d'arrière-plan */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse" 
          aria-hidden="true"
        />
        
        {/* Container image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover" 
          />
        </div>
      </AnimatedSection>
    </div>
  );
}