import { render, screen } from '@testing-library/react';
import Skills from '../Skills';
import { skills } from '../../data';

describe('Skills Component', () => {
    test('renders section title', () => {
        render(<Skills />);
        expect(screen.getByText('Compétences Techniques')).toBeInTheDocument();
    });

    test('renders all skill categories', () => {
        render(<Skills />);

        skills.forEach((category) => {
            expect(screen.getByText(category.category)).toBeInTheDocument();
        });
    });

    test('renders skill items', () => {
        render(<Skills />);

        skills.forEach((category) => {
            category.items.forEach((item) => {
                expect(screen.getAllByText(item).length).toBeGreaterThan(0);
            });
        });
    });
});
