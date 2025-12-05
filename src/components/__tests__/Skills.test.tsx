import { render, screen } from '@testing-library/react';
import Skills from '../skills/Skills';
import { skills } from '../../data/skills';

describe('Skills Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(<Skills />);
        expect(container).toMatchSnapshot();
    });

    test('renders section title', () => {
        render(<Skills />);
        expect(screen.getByText('skills.title')).toBeInTheDocument();
    });

    test('renders all skill categories', () => {
        render(<Skills />);
        skills.forEach(skill => {
            expect(screen.getByText(skill.category)).toBeInTheDocument();
        });
    });

    test('renders all skill items', () => {
        render(<Skills />);
        skills.forEach(skill => {
            skill.items.forEach(item => {
                // Use getAllByText because some skills might be repeated or appear in multiple places
                expect(screen.getAllByText(item).length).toBeGreaterThan(0);
            });
        });
    });

    test('renders icons for each category', () => {
        const { container } = render(<Skills />);
        // Check for icon wrappers
        const icons = container.querySelectorAll('.bg-blue-50.dark\\:bg-blue-900\\/30');
        expect(icons).toHaveLength(skills.length);
    });
});
