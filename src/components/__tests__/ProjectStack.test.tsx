import { render, screen } from '@testing-library/react';
import ProjectStack from '../Experience/ProjectStack';

describe('ProjectStack Component', () => {
    const technologies = ['React', 'TypeScript', 'Tailwind'];

    test('renders all technologies', () => {
        render(<ProjectStack technologies={technologies} />);

        technologies.forEach(tech => {
            expect(screen.getByText(tech)).toBeInTheDocument();
        });
    });

    test('renders section title', () => {
        render(<ProjectStack technologies={technologies} />);
        expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    });
});
