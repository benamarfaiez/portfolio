import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component', () => {
    test('renders section title', () => {
        render(<About />);
        expect(screen.getByText('about.title')).toBeInTheDocument();
    });

    test('renders about description', () => {
        render(<About />);
        expect(screen.getByText('about.description')).toBeInTheDocument();
    });

    test('renders with correct section id', () => {
        const { container } = render(<About />);
        const section = container.querySelector('#about');
        expect(section).toBeInTheDocument();
    });

    test('applies correct CSS classes', () => {
        const { container } = render(<About />);
        const section = container.querySelector('#about');
        expect(section).toHaveClass('py-20', 'bg-slate-50', 'dark:bg-slate-900/50');
    });
});
