import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(<About />);
        expect(container).toMatchSnapshot();
    });

    test('renders title and description correctly', () => {
        render(<About />);

        expect(screen.getByText('about.title')).toBeInTheDocument();
        expect(screen.getByText('about.description')).toBeInTheDocument();
    });

    test('has correct layout classes', () => {
        const { container } = render(<About />);
        const section = container.querySelector('section');
        expect(section).toHaveAttribute('id', 'about');
        expect(section).toHaveClass('py-20');
    });
});
