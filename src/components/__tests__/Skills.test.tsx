import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills Component', () => {
    test('renders section title', () => {
        render(<Skills />);
        expect(screen.getByText('skills.title')).toBeInTheDocument();
    });

    test('renders skill categories', () => {
        render(<Skills />);
        expect(screen.getByText('skills.categories.backend')).toBeInTheDocument();
        expect(screen.getByText('skills.categories.frontend')).toBeInTheDocument();
    });
});
