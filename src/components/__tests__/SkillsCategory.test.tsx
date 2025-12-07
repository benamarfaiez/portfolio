import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SkillsCategory from '../skills/SkillsCategory';

// Mock Chart.js components
jest.mock('react-chartjs-2', () => ({
    Bar: () => <div data-testid="mock-bar-chart" />
}));

describe('Skills Category Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/skills/backend']}>
                <Routes>
                    <Route path="/skills/:category" element={<SkillsCategory />} />
                </Routes>
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    test('renders 404 for invalid category', () => {
        render(
            <MemoryRouter initialEntries={['/skills/invalid']}>
                <Routes>
                    <Route path="/skills/:category" element={<SkillsCategory />} />
                </Routes>
            </MemoryRouter>
        );
        expect(screen.getByText('common.not_found_category')).toBeInTheDocument();
    });

    test('renders correct content for backend category', () => {
        render(
            <MemoryRouter initialEntries={['/skills/backend']}>
                <Routes>
                    <Route path="/skills/:category" element={<SkillsCategory />} />
                </Routes>
            </MemoryRouter>
        );

        // Check title (from config in component)
        expect(screen.getByText('skills.categories.backend')).toBeInTheDocument();

        // Check chart is rendered
        expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
    });

    test('navigates back when back button is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/skills/backend']}>
                <Routes>
                    <Route path="/skills/:category" element={<SkillsCategory />} />
                </Routes>
            </MemoryRouter>
        );

        const backBtn = screen.getByText('common.back_to_list');
        fireEvent.click(backBtn);
    });
});