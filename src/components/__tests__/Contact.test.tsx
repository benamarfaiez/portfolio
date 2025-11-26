import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import { personalInfo } from '../../data/data';

describe('Contact Component', () => {
    test('renders section title', () => {
        render(<Contact />);
        expect(screen.getByText('Me Contacter')).toBeInTheDocument();
    });

    test('renders contact information', () => {
        render(<Contact />);

        expect(screen.getByText(personalInfo.email)).toBeInTheDocument();
        expect(screen.getByText(personalInfo.phone)).toBeInTheDocument();
        expect(screen.getByText(personalInfo.location)).toBeInTheDocument();
    });

    test('renders contact form inputs', () => {
        render(<Contact />);

        expect(screen.getByLabelText(/Nom complet/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Envoyer/i })).toBeInTheDocument();
    });

    test('form has correct action attribute', () => {
        render(<Contact />);

        // Find the form element directly or by querying inside the container
        // Since we don't have a role="form" by default on <form>, we can use container.querySelector
        const { container } = render(<Contact />);
        const form = container.querySelector('form');
        expect(form).toHaveAttribute('action', `mailto:${personalInfo.email}`);
    });
});
