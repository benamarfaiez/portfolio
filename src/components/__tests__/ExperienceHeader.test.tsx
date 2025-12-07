import { render, screen, fireEvent } from '@testing-library/react';
import ExperienceHeader from '../Experience/ExperienceHeader';

// Mock data
const mockExperience = {
    id: 1,
    slug: 'test-slug',
    company: 'Test Company',
    role: 'Test Role',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Test Description',
    technologies: ['React', 'TypeScript'],
    projects: [],
    logo: 'test-logo.png'
};

describe('ExperienceHeader Component', () => {
    test('renders experience information correctly', () => {
        render(<ExperienceHeader experience={mockExperience} />);

        expect(screen.getByText('Test Company')).toBeInTheDocument();
        expect(screen.getByText('Test Role')).toBeInTheDocument();
        expect(screen.getByText('2023 - Present')).toBeInTheDocument();
        expect(screen.getByText('Remote')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    test('renders logo if present', () => {
        render(<ExperienceHeader experience={mockExperience} />);
        const img = screen.getByAltText('Test Company logo');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '../test-logo.png');
    });

    test('hides logo on error', () => {
        render(<ExperienceHeader experience={mockExperience} />);
        const img = screen.getByAltText('Test Company logo');
        fireEvent.error(img);
        expect(img).not.toBeVisible();
    });
});
