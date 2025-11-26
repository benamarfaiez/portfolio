import { render, screen } from '@testing-library/react';
import Experience from '../Experience';

describe('Experience Component', () => {
    test('renders section title', () => {
        render(<Experience />);
        expect(screen.getByText('experience.title')).toBeInTheDocument();
    });

    test('renders experience items', () => {
        render(<Experience />);
        // Check for keys of the first experience item as a sample
        expect(screen.getByText('experience.henner.role')).toBeInTheDocument();
        expect(screen.getByText('experience.henner.description')).toBeInTheDocument();
    });
});
