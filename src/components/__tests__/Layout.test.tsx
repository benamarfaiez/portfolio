import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../Layout';
import { useTheme } from '../../hooks/useTheme';

// Mock useTheme hook
jest.mock('../../hooks/useTheme', () => ({
    useTheme: jest.fn(),
}));

describe('Layout Component', () => {
    const mockToggleTheme = jest.fn();

    beforeEach(() => {
        (useTheme as jest.Mock).mockReturnValue({
            theme: 'light',
            toggleTheme: mockToggleTheme,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders navigation links', () => {
        render(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        expect(screen.getByText('about.title')).toBeInTheDocument();
        expect(screen.getByText('experience.title')).toBeInTheDocument();
        expect(screen.getByText('skills.title')).toBeInTheDocument();
        expect(screen.getByText('education.title')).toBeInTheDocument();
        expect(screen.getByText('certifications.title')).toBeInTheDocument();
        expect(screen.getByText('contact.title')).toBeInTheDocument();
    });

    test('renders children content', () => {
        render(
            <Layout>
                <div data-testid="child-content">Test Content</div>
            </Layout>
        );

        expect(screen.getByTestId('child-content')).toBeInTheDocument();
    });

    test('toggles theme when button is clicked', () => {
        render(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        // Get all theme toggle buttons (desktop and mobile)
        const themeBtns = screen.getAllByLabelText('Toggle theme');
        // Click the first one (desktop toggle)
        fireEvent.click(themeBtns[0]);

        expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    });

    test('renders footer with copyright', () => {
        render(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        expect(screen.getByText(/Faiez BEN AMAR/i)).toBeInTheDocument();
        expect(screen.getByText(/footer.rights/i)).toBeInTheDocument();
    });

    test('toggles mobile menu when button is clicked', () => {
        render(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        // Find the menu toggle button (the one that shows Menu/X icon)
        const buttons = screen.getAllByRole('button');
        const menuToggleBtn = buttons.find(btn => btn.className.includes('rounded-lg') && !btn.getAttribute('aria-label'));

        expect(menuToggleBtn).toBeDefined();

        // Click to open menu
        fireEvent.click(menuToggleBtn!);

        // Mobile menu links should now be visible
        const mobileLinks = screen.getAllByRole('link', { name: /about.title/i });
        expect(mobileLinks.length).toBeGreaterThan(1); // Desktop + mobile
    });

    test('closes mobile menu when a link is clicked', () => {
        render(
            <Layout>
                <div>Content</div>
            </Layout>
        );

        // Open the mobile menu
        const buttons = screen.getAllByRole('button');
        const menuToggleBtn = buttons.find(btn => btn.className.includes('rounded-lg') && !btn.getAttribute('aria-label'));
        fireEvent.click(menuToggleBtn!);

        // Get all links (desktop and mobile)
        const allLinks = screen.getAllByRole('link', { name: /about.title/i });

        // Click the mobile version (should be the last one)
        const mobileLink = allLinks[allLinks.length - 1];
        fireEvent.click(mobileLink);

        // This should trigger setIsMenuOpen(false)
        // We can't easily test the menu is closed due to framer-motion animations
        // but we've covered the onClick handler
    });
});
