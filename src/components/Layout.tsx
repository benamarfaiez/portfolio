import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { AnimatePresence } from 'framer-motion';
import ScrollToTopButton from './ScrollToTopButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: t('layout.about'), href: '/#about' },
        { name: t('layout.experience'), href: '/#experience' },
        { name: t('layout.skills'), href: '/#skills' },
        { name: t('layout.formation'), href: '/#education' },
        { name: t('layout.certifications'), href: '/#certifications' },
        { name: t('layout.contact'), href: '/#contact' },
    ];

    // Gère le scroll automatique lors du changement de route avec un hash
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    // Fonction de navigation intelligente
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const [, hash] = href.split('#');
        const targetId = hash ? `#${hash}` : null;
        if (location.pathname === '/') {
            if (targetId) {
                const element = document.querySelector(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate(href);
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="md:hidden">
                        </div>

                        {/* Navigation Desktop */}
                        <div className="hidden md:flex items-center space-x-6 mr-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavigation(e, link.href)}
                                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Contrôles Desktop */}
                        <div className="hidden md:flex items-center gap-2">
                            <LanguageSwitcher />
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>

                        {/* Menu Mobile */}
                        <div className="md:hidden flex items-center gap-2">
                            <LanguageSwitcher />
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Mobile */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-lg">
                            <div className="px-4 pt-2 pb-4 space-y-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavigation(e, link.href)}
                                        className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Contenu Principal */}
            <main className="pt-16">
                {children}
                <ScrollToTopButton />
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                © {new Date().getFullYear()} Faiez BEN AMAR. {t('footer.rights')}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
