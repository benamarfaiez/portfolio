import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/data';
import { HeroActionsProps } from '../../types/hero';

export function HeroActions({ contactText, downloadCvText }: HeroActionsProps) {
  const socialLinks = [
    {
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: personalInfo.github,
      label: 'GitHub',
      icon: Github,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
      {/* Action principale : Email */}
      <a
        href={`mailto:${personalInfo.email}`}
        className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
      >
        {contactText} <Mail size={18} />
      </a>

      {/* Action secondaire : Telecharger CV */}
      <a
        href={personalInfo.cvPath}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-900 dark:text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
      >
        {downloadCvText} <Download size={18} />
      </a>

      {/* Liens Réseaux Sociaux (OCP Compliant) */}
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}