import { render, screen, fireEvent } from '@testing-library/react';
import ScrollToTopButton from '../ScrollToTopButton';

describe('ScrollToTopButton Component', () => {
    beforeEach(() => {
        // Reset scroll position
        window.scrollTo = jest.fn();
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    });

    test('does not render when scroll position is less than 400px', () => {
        render(<ScrollToTopButton />);

        // Button should not be visible initially
        const button = screen.queryByLabelText('Retour en haut de page');
        expect(button).not.toBeInTheDocument();
    });

    test('renders when scroll position is greater than 400px', () => {
        render(<ScrollToTopButton />);

        // Simulate scroll
        Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

        fireEvent.scroll(window);

        // Button should be visible
        const button = screen.getByLabelText('Retour en haut de page');
        expect(button).toBeInTheDocument();
    });

    test('scrolls to top when clicked', () => {
        render(<ScrollToTopButton />);

        // Make button visible
        Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

        fireEvent.scroll(window);

        const button = screen.getByLabelText('Retour en haut de page');
        fireEvent.click(button);

        // Should call scrollTo with top: 0 and smooth behavior
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth'
        });
    });
});
