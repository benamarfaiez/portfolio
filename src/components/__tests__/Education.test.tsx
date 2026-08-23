import { render, screen } from '@testing-library/react';
import Education from '../Education/Education';
import { educations } from '../../data/educations';

describe('Education Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(<Education />);
        expect(container).toMatchSnapshot();
    });

    test('renders section title', () => {
        render(<Education />);
        expect(screen.getByText('education.title')).toBeInTheDocument();
    });

    test('renders all education items', () => {
        render(<Education />);
        educations.forEach(edu => {
            expect(screen.getByText(edu.degree)).toBeInTheDocument();
            expect(screen.getByText(edu.school)).toBeInTheDocument();
            expect(screen.getByText(edu.year)).toBeInTheDocument();
            expect(screen.getByText(edu.location)).toBeInTheDocument();
        });
    });

    test('renders icons for each item', () => {
        const { container } = render(<Education />);
        // Check for GraduationCap icon wrapper
        const icons = container.querySelectorAll('.bg-blue-50.dark\\:bg-blue-900\\/30');
        expect(icons).toHaveLength(educations.length);
    });
});
