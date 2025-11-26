import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import { personalInfo } from '../../data/data';

describe('Contact Component', () => {
    test('renders section title', () => {
        render(<Contact />);
        expect(screen.getByText('contact.title')).toBeInTheDocument();
    });

    test('renders contact information', () => {
        render(<Contact />);

        expect(screen.getByText(personalInfo.email)).toBeInTheDocument();
        expect(screen.getByText(personalInfo.phone)).toBeInTheDocument();
        expect(screen.getByText('contact.location')).toBeInTheDocument();
    });

    test('renders contact form inputs', () => {
        render(<Contact />);

        expect(screen.getByLabelText(/contact.form.name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/contact.form.email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/contact.form.message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /contact.form.send/i })).toBeInTheDocument();
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
