import { useState, useEffect } from 'react';

interface ResponsiveState {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    width: number;
}

/**
 * Hook personnalisé pour détecter la taille d'écran de manière responsive
 * Breakpoints:
 * - Mobile: <= 767px
 * - Tablet: 768px - 1023px
 * - Desktop: >= 1024px
 */
export function useResponsive(): ResponsiveState {
    const [screenSize, setScreenSize] = useState<ResponsiveState>({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    });

    useEffect(() => {
        // Vérifier si window est disponible (pour SSR)
        if (typeof window === 'undefined') return;

        // Fonction pour mettre à jour la taille d'écran
        const updateScreenSize = () => {
            const width = window.innerWidth;
            setScreenSize({
                isMobile: width <= 767,
                isTablet: width >= 768 && width <= 1023,
                isDesktop: width >= 1024,
                width,
            });
        };

        // Initialiser immédiatement
        updateScreenSize();

        // Écouter les changements de taille
        window.addEventListener('resize', updateScreenSize);

        // Nettoyage
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return screenSize;
}
