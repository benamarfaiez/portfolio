import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExperienceItem from '../Experience/ExperienceItem';

// Mock experience data
const mockExperience = {
    id: 1,
    slug: 'test-role',
    company: 'Test Company',
    role: 'Test Role',
    period: '2023 - Present',
    location: 'Test Location',
    description: 'Test Description',
    technologies: ['React', 'TypeScript'],
    projects: [],
    logo: 'test-logo.png'
};

describe('ExperienceItem Component', () => {
    test('renders correctly', () => {
        render(
            <MemoryRouter>
                <ExperienceItem experience={mockExperience} index={0} />
            </MemoryRouter>
        );

        expect(screen.getByText('Test Company')).toBeInTheDocument();
        expect(screen.getByText('Test Role')).toBeInTheDocument(); // t() returns key if not found, or mocks might handle it
        expect(screen.getByText('Test Description')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });

    test('renders view details link', () => {
        render(
            <MemoryRouter>
                <ExperienceItem experience={mockExperience} index={0} />
            </MemoryRouter>
        );

        const link = screen.getByRole('link', { name: /common.view_details/i });
        expect(link).toHaveAttribute('href', '/experiences/test-role');
    });

    test('alternates layout based on index', () => {
        const { container: containerEven } = render(
            <MemoryRouter>
                <ExperienceItem experience={mockExperience} index={0} />
            </MemoryRouter>
        );
        expect(containerEven.firstChild).toHaveClass('md:flex-row-reverse');

        const { container: containerOdd } = render(
            <MemoryRouter>
                <ExperienceItem experience={mockExperience} index={1} />
            </MemoryRouter>
        );
        expect(containerOdd.firstChild).not.toHaveClass('md:flex-row-reverse');
    });

    test('hides logo on error', () => {
        render(
            <MemoryRouter>
                <ExperienceItem experience={mockExperience} index={0} />
            </MemoryRouter>
        );

        const img = screen.getByAltText('Test Company logo');
        fireEvent.error(img);

        expect(img).not.toBeVisible();
    });
});

