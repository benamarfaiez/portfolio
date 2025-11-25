import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { personalInfo } from '../../data';

describe('Hero Component', () => {
    test('renders personal information correctly', () => {
        render(<Hero />);

        expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
        expect(screen.getByText(personalInfo.title)).toBeInTheDocument();
        expect(screen.getByText(/Développeur passionné/i)).toBeInTheDocument();
    });

    test('renders call to action buttons', () => {
        render(<Hero />);

        const contactBtn = screen.getByRole('link', { name: /Me contacter/i });
        const cvBtn = screen.getByRole('link', { name: /Télécharger CV/i });

        expect(contactBtn).toBeInTheDocument();
        expect(contactBtn).toHaveAttribute('href', '#contact');

        expect(cvBtn).toBeInTheDocument();
        expect(cvBtn).toHaveAttribute('href', '/cv.pdf');
        expect(cvBtn).toHaveAttribute('target', '_blank');
    });

    test('renders social links', () => {
        render(<Hero />);

        const linkedinBtn = screen.getByLabelText('LinkedIn');
        expect(linkedinBtn).toBeInTheDocument();
        expect(linkedinBtn).toHaveAttribute('href', personalInfo.linkedin);
    });
});
