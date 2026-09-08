import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavigatorCardProps } from '../../types/experiences';

export const NavigatorCard: React.FC<NavigatorCardProps> = ({
  experience,
  direction,
  onNavigate,
}) => {
  const { t } = useTranslation();
  const isPrevious = direction === 'previous';
  const Icon = isPrevious ? ArrowLeft : ArrowRight;
  const labelKey = isPrevious ? 'experience.navigator.previous' : 'experience.navigator.next';

  return (
    <motion.button
      type="button"
      onClick={() => onNavigate(experience.slug)}
      className="group flex items-center justify-between gap-4 w-full text-left p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      aria-label={t(labelKey)}
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 flex items-center gap-2">
          {isPrevious && <Icon size={16} className="transition-transform group-hover:-translate-x-0.5" />}
          {t(labelKey)}
          {!isPrevious && <Icon size={16} className="transition-transform group-hover:translate-x-0.5" />}
        </span>
        <p className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
          {experience.company}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t(experience.role)}
        </p>
        <div>
          <span className="inline-flex items-center text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 rounded-full font-medium">
            {t(experience.period)}
          </span>
        </div>
      </div>
      
      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-300 shrink-0">
        <Icon size={20} />
      </div>
    </motion.button>
  );
};