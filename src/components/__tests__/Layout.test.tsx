import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../Layout';
import { LinkProps } from 'react-router-dom';

// Mock hooks
const mockToggleTheme = jest.fn();
jest.mock('../../hooks/useTheme', () => ({
    useTheme: () => ({
        theme: 'light',
        toggleTheme: mockToggleTheme,
    }),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: '/', hash: '' }),
    useNavigationType: () => 'PUSH',
    Link: ({ children, to, ...props }: React.PropsWithChildren<LinkProps>) => <a href={to as string} {...props}>{children}</a>,
}));

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.scrollTo = jest.fn();

describe('Layout Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders children correctly', () => {
        render(
            <Layout>
                <div data-testid="child-content">Child Content</div>
            </Layout>
        );

        expect(screen.getByTestId('child-content')).toBeInTheDocument();
    });

    test('renders navigation links', () => {
        render(
            <Layout><div>Content</div></Layout>
        );

        expect(screen.getByText('layout.about')).toBeInTheDocument();
        expect(screen.getByText('layout.experience')).toBeInTheDocument();
        expect(screen.getByText('layout.contact')).toBeInTheDocument();
    });

    test('toggles theme when button is clicked', () => {
        render(
            <Layout><div>Content</div></Layout>
        );

        const themeButtons = screen.getAllByLabelText('Toggle theme');
        fireEvent.click(themeButtons[0]);
        expect(mockToggleTheme).toHaveBeenCalled();
    });

    test('opens and closes mobile menu', () => {
        render(
            <Layout><div>Content</div></Layout>
        );

        const menuButton = screen.getByLabelText('Toggle menu');

        // Open menu
        fireEvent.click(menuButton);

        // Close menu
        fireEvent.click(menuButton);
    });
});
