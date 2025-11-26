import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

// Mock react-i18next
jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
}));

describe('LanguageSwitcher Component', () => {
    const mockChangeLanguage = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useTranslation as jest.Mock).mockReturnValue({
            i18n: {
                language: 'fr',
                changeLanguage: mockChangeLanguage,
            },
        });
    });

    test('renders language select dropdown', () => {
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
    });

    test('displays French and English options', () => {
        render(<LanguageSwitcher />);
        expect(screen.getByText('Français')).toBeInTheDocument();
        expect(screen.getByText('English')).toBeInTheDocument();
    });

    test('selects French by default when language is fr', () => {
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox') as HTMLSelectElement;
        expect(select.value).toBe('fr');
    });

    test('selects English when language is en', () => {
        (useTranslation as jest.Mock).mockReturnValue({
            i18n: {
                language: 'en',
                changeLanguage: mockChangeLanguage,
            },
        });
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox') as HTMLSelectElement;
        expect(select.value).toBe('en');
    });

    test('calls changeLanguage when selecting French', () => {
        (useTranslation as jest.Mock).mockReturnValue({
            i18n: {
                language: 'en',
                changeLanguage: mockChangeLanguage,
            },
        });
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'fr' } });
        expect(mockChangeLanguage).toHaveBeenCalledWith('fr');
    });

    test('calls changeLanguage when selecting English', () => {
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'en' } });
        expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    });

    test('applies correct styling classes', () => {
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox');
        expect(select).toHaveClass('px-3', 'py-1.5', 'text-sm', 'rounded');
    });
});
