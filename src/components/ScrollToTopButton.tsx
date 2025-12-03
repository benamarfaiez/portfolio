import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollVisibility } from '../hooks/useScrollVisibility';

export default function ScrollToTopButton() {
    const { isVisible, scrollToTop } = useScrollVisibility();

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
