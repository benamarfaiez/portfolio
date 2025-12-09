import { render, screen, fireEvent } from '@testing-library/react';
import ExperienceNavigator from '../Experience/ExperienceNavigator';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('ExperienceNavigator', () => {
    beforeEach(() => {
        mockNavigate.mockReset();
    });

    test('renders previous and next experiences', () => {
        render(<ExperienceNavigator currentSlug="euro-information-fullstack" />);

        expect(screen.getByText('Henner')).toBeInTheDocument();
        expect(screen.getByText('Canaccord Genuity')).toBeInTheDocument();
    });

    test('navigates to next and previous slugs', () => {
        render(<ExperienceNavigator currentSlug="euro-information-fullstack" />);

        fireEvent.click(screen.getByRole('button', { name: /experience.navigator.next/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/experiences/canaccord-genuity-developer', { state: { from: 'detail-nav' } });

        fireEvent.click(screen.getByRole('button', { name: /experience.navigator.previous/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/experiences/henner-developer', { state: { from: 'detail-nav' } });
    });
});

