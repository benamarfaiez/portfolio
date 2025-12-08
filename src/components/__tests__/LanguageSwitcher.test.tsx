import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../LanguageSwitcher';
import * as ReactI18Next from 'react-i18next';

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
            changeLanguage: mockChangeLanguage,
            language: 'fr',
        },
    }),
}));

describe('LanguageSwitcher Component', () => {
    beforeEach(() => {
        mockChangeLanguage.mockClear();
    });

    test('renders correctly and matches snapshot', () => {
        const { container } = render(<LanguageSwitcher />);
        expect(container).toMatchSnapshot();
    });

    test('renders with current language selected', () => {
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox');
        expect(select).toHaveValue('fr');
    });

    test('changes language when selection changes', () => {
        render(<LanguageSwitcher />);
        const select = screen.getByRole('combobox');

        fireEvent.change(select, { target: { value: 'en' } });

        expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    });

});
