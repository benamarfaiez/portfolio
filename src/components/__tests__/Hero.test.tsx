import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { personalInfo } from '../../data/data';

describe('Hero Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(<Hero />);
        expect(container).toMatchSnapshot();
    });

    test('renders personal information correctly', () => {
        render(<Hero />);

        expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
        expect(screen.getByText('hero.title')).toBeInTheDocument();
        expect(screen.getByText('about.description')).toBeInTheDocument();
        expect(screen.getByAltText(personalInfo.name)).toBeInTheDocument();
    });

    test('renders call to action buttons with correct attributes', () => {
        render(<Hero />);

        const contactBtns = screen.getAllByRole('link', { name: /hero.contact/i });
        const cvBtns = screen.getAllByRole('link', { name: /hero.download_cv/i });

        expect(contactBtns[0]).toBeInTheDocument();
        expect(contactBtns[0]).toHaveAttribute('href', '#contact');

        expect(cvBtns[0]).toBeInTheDocument();
        expect(cvBtns[0]).toHaveAttribute('href', '/cv.pdf');
        expect(cvBtns[0]).toHaveAttribute('target', '_blank');
        expect(cvBtns[0]).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders social links with accessibility attributes', () => {
        render(<Hero />);

        const linkedinBtn = screen.getByLabelText('LinkedIn');
        expect(linkedinBtn).toBeInTheDocument();
        expect(linkedinBtn).toHaveAttribute('href', personalInfo.linkedin);
        expect(linkedinBtn).toHaveAttribute('target', '_blank');
        expect(linkedinBtn).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('has responsive classes for layout', () => {
        const { container } = render(<Hero />);
        // Check for flex-col on mobile and md:flex-row on desktop
        const flexContainer = container.querySelector('.flex.flex-col.md\\:flex-row');
        expect(flexContainer).toBeInTheDocument();
    });
});

