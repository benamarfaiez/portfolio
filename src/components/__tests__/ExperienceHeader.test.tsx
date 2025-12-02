import { render, screen } from '@testing-library/react';
import ExperienceHeader from '../Experience/ExperienceHeader';
import { experiences } from '../../data/experiences';

describe('ExperienceHeader Component', () => {
    const mockExperience = experiences[0];

    test('renders experience information correctly', () => {
        render(<ExperienceHeader experience={mockExperience} />);

        expect(screen.getByText(mockExperience.role)).toBeInTheDocument();
        expect(screen.getByText(mockExperience.company)).toBeInTheDocument();
        expect(screen.getByText(mockExperience.period)).toBeInTheDocument();
        expect(screen.getByText(mockExperience.location)).toBeInTheDocument();
        expect(screen.getByText(mockExperience.description)).toBeInTheDocument();
    });

    test('renders logo if present', () => {
        render(<ExperienceHeader experience={mockExperience} />);

        if (mockExperience.logo) {
            const logo = screen.getByAltText(`${mockExperience.company} logo`);
            expect(logo).toBeInTheDocument();
            expect(logo).toHaveAttribute('src', '../' + mockExperience.logo);
        }
    });
});
