import { render, screen } from '@testing-library/react';
import Experience from '../Experience/Experience';
import { experiences } from '../../data/experiences';

describe('Experience Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(<Experience />);
        expect(container).toMatchSnapshot();
    });

    test('renders section title', () => {
        render(<Experience />);
        expect(screen.getByText('experience.title')).toBeInTheDocument();
    });

    test('renders all experience items', () => {
        render(<Experience />);
        experiences.forEach(exp => {
            expect(screen.getAllByText(exp.company).length).toBeGreaterThan(0);
            expect(screen.getAllByText(exp.role).length).toBeGreaterThan(0);
            expect(screen.getAllByText(exp.period).length).toBeGreaterThan(0);
            expect(screen.getAllByText(exp.location).length).toBeGreaterThan(0);
            expect(screen.getAllByText(exp.description).length).toBeGreaterThan(0);
        });
    });

    test('renders projects for each experience', () => {
        render(<Experience />);
        experiences.forEach(exp => {
            exp.projects.forEach(project => {
                expect(screen.getByText(project.name)).toBeInTheDocument();
                expect(screen.getByText(project.details)).toBeInTheDocument();
            });
        });
    });

    test('renders technologies for each experience', () => {
        render(<Experience />);
        experiences.forEach(exp => {
            exp.technologies.forEach(tech => {
                // Use getAllByText because technologies might be repeated across experiences
                expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
            });
        });
    });

    test('applies alternating layout classes', () => {
        const { container } = render(<Experience />);
        // Check for the alternating class logic
        // index 0: md:flex-row-reverse
        // index 1: (default, no reverse)
        const items = container.querySelectorAll('.relative.flex.flex-col.md\\:flex-row');
        expect(items[0]).toHaveClass('md:flex-row-reverse');
        expect(items[1]).not.toHaveClass('md:flex-row-reverse');
    });
});
