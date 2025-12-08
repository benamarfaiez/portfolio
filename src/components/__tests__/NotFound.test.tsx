import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../NotFound';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('NotFound Component', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test('renders 404 message correctly', () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );

        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText(/notFound.title|Page non trouvée/i)).toBeInTheDocument();
    });

    test('navigates to home when home button is clicked', () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );

        const homeButton = screen.getByText(/notFound.homeButton|Retour à l'accueil/i);
        fireEvent.click(homeButton);

        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    test('navigates back when back button is clicked', () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );

        const backButton = screen.getByText(/notFound.backButton|Page précédente/i);
        fireEvent.click(backButton);

        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    test('displays decorative animated dots', () => {
        const { container } = render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );

        // Check for decorative elements
        const dots = container.querySelectorAll('.rounded-full.bg-gradient-to-r');
        expect(dots).toHaveLength(3);
    });
});
