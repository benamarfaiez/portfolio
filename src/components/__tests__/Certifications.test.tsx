import { render, screen } from '@testing-library/react';
import Certifications from '../Certifications';

describe('Certifications component', () => {
    test('renders section title', () => {
        render(<Certifications />);
        const title = screen.getByText('certifications.title');
        expect(title).toBeInTheDocument();
    });

    test('renders certification items', () => {
        render(<Certifications />);
        // Check for actual certification titles from data file
        expect(screen.getByText('React JS')).toBeInTheDocument();
        expect(screen.getByText(/Angular 12 .Net core web API/i)).toBeInTheDocument();
    });

    test('renders certification dates', () => {
        render(<Certifications />);
        expect(screen.getByText(/Novembre 2025/i)).toBeInTheDocument();
        expect(screen.getByText(/Juillet 2021/i)).toBeInTheDocument();
    });

    test('renders with correct section id', () => {
        const { container } = render(<Certifications />);
        const section = container.querySelector('#certifications');
        expect(section).toBeInTheDocument();
    });
});
