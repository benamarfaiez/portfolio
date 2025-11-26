import { render, screen } from '@testing-library/react';
import Education from '../Education';

describe('Education Component', () => {
    test('renders section title', () => {
        render(<Education />);
        expect(screen.getByText('education.title')).toBeInTheDocument();
    });

    test('renders education items', () => {
        render(<Education />);
        // Check for translation keys for education entries
        expect(screen.getByText('education.ensi.degree')).toBeInTheDocument();
        expect(screen.getByText('education.ensi.school')).toBeInTheDocument();
        expect(screen.getByText('education.prepa.degree')).toBeInTheDocument();
        expect(screen.getByText('education.prepa.school')).toBeInTheDocument();
    });

    test('renders all education years', () => {
        render(<Education />);
        expect(screen.getByText('2020')).toBeInTheDocument();
        expect(screen.getByText('2017')).toBeInTheDocument();
    });

    test('renders with correct section id', () => {
        const { container } = render(<Education />);
        const section = container.querySelector('#education');
        expect(section).toBeInTheDocument();
    });

    test('renders graduation cap icons', () => {
        const { container } = render(<Education />);
        const icons = container.querySelectorAll('svg');
        expect(icons.length).toBeGreaterThan(0);
    });
});
