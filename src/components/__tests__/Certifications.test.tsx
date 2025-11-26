import { render, screen } from '@testing-library/react';
import Certifications from '../Certifications';

// Mock the certifications data
jest.mock('../../data/certifications', () => ({
    certifications: [
        { id: 1, title: 'React JS', column: 'left' },
        { id: 2, title: 'Angular 12', column: 'right' },
    ],
}));

describe('Certifications component', () => {
    test('renders section title', () => {
        render(<Certifications />);
        const title = screen.getByText(/CERTIFICATIONS/i);
        expect(title).toBeInTheDocument();
    });

    test('renders certification items', () => {
        render(<Certifications />);
        expect(screen.getByText('React JS')).toBeInTheDocument();
        expect(screen.getByText('Angular 12')).toBeInTheDocument();
    });
});
