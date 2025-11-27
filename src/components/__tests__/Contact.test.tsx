import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';
import { personalInfo } from '../../data/data';

describe('Contact Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(<Contact />);
        expect(container).toMatchSnapshot();
    });

    test('renders contact information', () => {
        render(<Contact />);
        expect(screen.getByText(personalInfo.email)).toBeInTheDocument();
        expect(screen.getByText(personalInfo.phone)).toBeInTheDocument();
        expect(screen.getByText('contact.location')).toBeInTheDocument();
    });

    test('renders contact links with correct attributes', () => {
        render(<Contact />);
        const emailLink = screen.getByRole('link', { name: new RegExp(personalInfo.email, 'i') });
        expect(emailLink).toHaveAttribute('href', `mailto:${personalInfo.email}`);

        // Phone can be found by checking all links and finding the one with tel: href
        const allLinks = screen.getAllByRole('link');
        const phoneLink = allLinks.find(link => link.getAttribute('href')?.includes('tel:'));
        expect(phoneLink).toBeInTheDocument();
        expect(phoneLink).toHaveAttribute('href', `tel:${personalInfo.phone}`);
    });

    test('renders form inputs and submit button', () => {
        render(<Contact />);

        expect(screen.getByPlaceholderText('contact.form.placeholder.name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('contact.form.placeholder.email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('contact.form.placeholder.message')).toBeInTheDocument();

        const submitBtn = screen.getByRole('button', { name: /contact.form.send/i });
        expect(submitBtn).toBeInTheDocument();
    });

    test('allows user to type in form fields', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText('contact.form.placeholder.name') as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText('contact.form.placeholder.email') as HTMLInputElement;
        const messageInput = screen.getByPlaceholderText('contact.form.placeholder.message') as HTMLTextAreaElement;

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello there' } });

        expect(nameInput).toHaveValue('John Doe');
        expect(emailInput).toHaveValue('john@example.com');
        expect(messageInput).toHaveValue('Hello there');
    });
});
