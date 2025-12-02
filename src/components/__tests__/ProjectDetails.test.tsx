import { render, screen, fireEvent } from '@testing-library/react';
import ProjectDetails from '../Experience/ProjectDetails';
import { experiences } from '../../data/experiences';

describe('ProjectDetails Component', () => {
    const mockProject = experiences[0].projects[0];
    const mockOnNext = jest.fn();
    const mockOnPrev = jest.fn();

    test('renders project details correctly', () => {
        render(
            <ProjectDetails
                project={mockProject}
                onNext={mockOnNext}
                onPrev={mockOnPrev}
                hasNext={true}
                hasPrev={true}
                currentIndex={0}
                totalProjects={3}
            />
        );

        expect(screen.getByText(mockProject.name)).toBeInTheDocument();
        expect(screen.getByText(mockProject.context)).toBeInTheDocument();

        // Check for realization items
        mockProject.realization.forEach(item => {
            // Since realization items might be translation keys, we check if they are in the document
            // Note: If they are keys, the mock translator usually returns the key
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    test('calls navigation handlers', () => {
        render(
            <ProjectDetails
                project={mockProject}
                onNext={mockOnNext}
                onPrev={mockOnPrev}
                hasNext={true}
                hasPrev={true}
                currentIndex={1}
                totalProjects={3}
            />
        );

        // Find navigation buttons. 
        // Note: The component renders navigation only if totalProjects > 1.
        // We need to identify buttons. They have Chevron icons.
        // We can find by role button.
        const buttons = screen.getAllByRole('button');
        // Assuming first is prev, second is next based on order in DOM
        fireEvent.click(buttons[0]);
        expect(mockOnPrev).toHaveBeenCalled();

        fireEvent.click(buttons[1]);
        expect(mockOnNext).toHaveBeenCalled();
    });

    test('disables navigation buttons when appropriate', () => {
        render(
            <ProjectDetails
                project={mockProject}
                onNext={mockOnNext}
                onPrev={mockOnPrev}
                hasNext={false}
                hasPrev={false}
                currentIndex={0}
                totalProjects={1}
            />
        );

        // If totalProjects is 1, navigation might not be rendered based on the code:
        // {totalProjects > 1 && <div id='projects_navigation' ...
        // So let's test with totalProjects > 1 but hasNext/hasPrev false

    });

    test('renders navigation and handles disabled states', () => {
        render(
            <ProjectDetails
                project={mockProject}
                onNext={mockOnNext}
                onPrev={mockOnPrev}
                hasNext={false}
                hasPrev={false}
                currentIndex={0}
                totalProjects={2}
            />
        );

        const buttons = screen.getAllByRole('button');
        expect(buttons[0]).toBeDisabled(); // Prev
        expect(buttons[1]).toBeDisabled(); // Next
    });
});
