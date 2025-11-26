import { render, screen } from '@testing-library/react';
import Experience from '../Experience';
import { experiences } from '../../data/experiences';

describe('Experience Component', () => {
    test('renders section title', () => {
        render(<Experience />);
        expect(screen.getByText('Expérience Professionnelle')).toBeInTheDocument();
    });

    test('renders all experience items', () => {
        render(<Experience />);

        experiences.forEach((exp) => {
            expect(screen.getAllByText(exp.company).length).toBeGreaterThan(0);
            expect(screen.getAllByText(exp.role).length).toBeGreaterThan(0);
            expect(screen.getAllByText(exp.period).length).toBeGreaterThan(0);
        });
    });

    test('renders projects for each experience', () => {
        render(<Experience />);

        experiences.forEach((exp) => {
            exp.projects.forEach((project) => {
                expect(screen.getByText(project.name)).toBeInTheDocument();
            });
        });
    });

    test('renders technologies badges', () => {
        render(<Experience />);

        experiences.forEach((exp) => {
            exp.technologies.forEach((tech) => {
                // Use getAllByText because tech might appear multiple times
                expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
            });
        });
    });
});
