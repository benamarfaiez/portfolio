import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScrollToTopButton - Bouton flottant pour retourner en haut de page
 * 
 * Fonctionnalités :
 * - Apparaît après 400px de scroll
 * - Animation fluide d'entrée/sortie
 * - Affiche le pourcentage de scroll
 * - Compatible dark mode
 * - Accessible (aria-label, focus visible)
 */
export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Détecte le scroll et calcule le pourcentage
    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            // Affiche le bouton après 400px
            setIsVisible(scrolled > 400);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll fluide vers le haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    aria-label="Retour en haut de page"
                    className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-50 
                     w-14 h-14 md:w-16 md:h-16
                     flex flex-col items-center justify-center
                     bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                     border border-gray-300 dark:border-gray-700
                     rounded-full shadow-lg hover:shadow-xl
                     transition-all duration-300
                     hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/50
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     group"
                >
                    {/* Icône avec animation de rebond */}
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                    >
                        <ArrowUp
                            className="w-6 h-6 md:w-7 md:h-7 text-gray-700 dark:text-gray-200 
                         group-hover:text-blue-600 dark:group-hover:text-blue-400 
                         transition-colors"
                        />
                    </motion.div>


                </motion.button>
            )}
        </AnimatePresence>
    );
}
