import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../Contact';
import { personalInfo } from '../../data/data';
import emailjs from '@emailjs/browser';
import { getEnvVar } from '../../utils/env';

// Mock dependencies
jest.mock('@emailjs/browser', () => ({
    __esModule: true,
    default: {
        sendForm: jest.fn(),
    },
}));

jest.mock('../../utils/env', () => ({
    getEnvVar: jest.fn(),
}));

describe('Contact Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (getEnvVar as jest.Mock).mockReturnValue('test-value');
    });

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

        const allLinks = screen.getAllByRole('link');
        const phoneLink = allLinks.find(link => link.getAttribute('href')?.includes('tel:'));
        expect(phoneLink).toBeInTheDocument();
        expect(phoneLink).toHaveAttribute('href', `tel:${personalInfo.phone}`);
    });

    test('renders form inputs and submit button', () => {
        render(<Contact />);

        expect(screen.getByPlaceholderText('contact.form.placeholder.email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('contact.form.placeholder.message')).toBeInTheDocument();

        const submitBtn = screen.getByRole('button', { name: /contact.form.send/i });
        expect(submitBtn).toBeInTheDocument();
    });

    test('allows user to type in form fields', () => {
        render(<Contact />);

        const emailInput = screen.getByPlaceholderText('contact.form.placeholder.email');
        const messageInput = screen.getByPlaceholderText('contact.form.placeholder.message');

        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello there' } });

        expect(emailInput).toHaveValue('john@example.com');
        expect(messageInput).toHaveValue('Hello there');
    });

    test('shows error when environment variables are missing', async () => {
        (getEnvVar as jest.Mock).mockReturnValue(undefined);

        render(<Contact />);

        // Mock form validity to allow submission attempt
        const emailInput = screen.getByPlaceholderText('contact.form.placeholder.email');
        const messageInput = screen.getByPlaceholderText('contact.form.placeholder.message');

        fireEvent.change(emailInput, { target: { value: 'john@test.com' } });
        fireEvent.change(messageInput, { target: { value: 'Message' } });

        const submitBtn = screen.getByRole('button', { name: /contact.form.send/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText(/Configuration EmailJS manquante/i)).toBeInTheDocument();
        });

        expect(emailjs.sendForm).not.toHaveBeenCalled();
    });

    test('handles successful form submission', async () => {
        jest.useFakeTimers();
        (emailjs.sendForm as jest.Mock).mockResolvedValue({ status: 200, text: 'OK' });

        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText('contact.form.placeholder.email'), { target: { value: 'john@test.com' } });
        fireEvent.change(screen.getByPlaceholderText('contact.form.placeholder.message'), { target: { value: 'Message' } });

        fireEvent.click(screen.getByRole('button', { name: /contact.form.send/i }));

        expect(screen.getByText(/contact.loading/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(/contact.success/i)).toBeInTheDocument();
        });

        expect(emailjs.sendForm).toHaveBeenCalledTimes(1);

        // Test reset timeout
        jest.runAllTimers();

        await waitFor(() => {
            expect(screen.queryByText(/contact.success/i)).not.toBeInTheDocument();
        });

        jest.useRealTimers();
    });

    test('handles API error during submission', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        (emailjs.sendForm as jest.Mock).mockRejectedValue(new Error('API Error'));

        render(<Contact />);

        fireEvent.change(screen.getByPlaceholderText('contact.form.placeholder.email'), { target: { value: 'john@test.com' } });
        fireEvent.change(screen.getByPlaceholderText('contact.form.placeholder.message'), { target: { value: 'Message' } });

        fireEvent.click(screen.getByRole('button', { name: /contact.form.send/i }));

        await waitFor(() => {
            expect(screen.getByText(/Erreur lors de l'envoi/i)).toBeInTheDocument();
        });

        expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
        consoleSpy.mockRestore();
    });
});
