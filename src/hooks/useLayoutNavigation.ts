import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useLayoutNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return {
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        handleNavigation,
    };
}
