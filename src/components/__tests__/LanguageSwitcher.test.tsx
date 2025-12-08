import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LanguageSwitcher from '../LanguageSwitcher';

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: {
            language: 'fr',
            changeLanguage: mockChangeLanguage,
        },
    }),
}));

describe('LanguageSwitcher Component', () => {
    beforeEach(() => {
        mockChangeLanguage.mockClear();
    });

    test('renders language switcher button with globe icon', () => {
        render(<LanguageSwitcher />);

        const button = screen.getByRole('button', { name: /change language/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    test('displays current language label on desktop', () => {
        render(<LanguageSwitcher />);

        // Should show "Français" (hidden on mobile with sm:inline)
        expect(screen.getByText('Français')).toBeInTheDocument();
    });

    test('opens dropdown menu when button is clicked', () => {
        render(<LanguageSwitcher />);

        const button = screen.getByRole('button', { name: /change language/i });

        // Dropdown should be closed initially
        expect(screen.queryByText('English')).not.toBeInTheDocument();

        // Click to open
        fireEvent.click(button);

        // Dropdown should be open
        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getAllByText('Français')).toHaveLength(2); // Button + dropdown
        expect(screen.getByText('English')).toBeInTheDocument();
    });

    test('changes language when option is selected', async () => {
        render(<LanguageSwitcher />);

        // Open dropdown
        const button = screen.getByRole('button', { name: /change language/i });
        fireEvent.click(button);

        // Click on English option
        const englishOption = screen.getByRole('button', { name: /switch to english/i });
        fireEvent.click(englishOption);

        // Should call changeLanguage
        await waitFor(() => {
            expect(mockChangeLanguage).toHaveBeenCalledWith('en');
        });
    });

    test('shows checkmark next to active language', () => {
        render(<LanguageSwitcher />);

        // Open dropdown
        const button = screen.getByRole('button', { name: /change language/i });
        fireEvent.click(button);

        // French should be active (has checkmark)
        const frenchOption = screen.getByRole('button', { name: /switch to français/i });
        expect(frenchOption).toHaveClass('bg-blue-50');
    });

    test('closes dropdown when clicking outside', async () => {
        render(
            <div>
                <LanguageSwitcher />
                <div data-testid="outside">Outside element</div>
            </div>
        );

        // Open dropdown
        const button = screen.getByRole('button', { name: /change language/i });
        fireEvent.click(button);

        expect(screen.getByText('English')).toBeInTheDocument();

        // Click outside
        const outside = screen.getByTestId('outside');
        fireEvent.mouseDown(outside);

        // Dropdown should close
        await waitFor(() => {
            expect(screen.queryByText('English')).not.toBeInTheDocument();
        });
    });
});
