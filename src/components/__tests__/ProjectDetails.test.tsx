import { render, screen, fireEvent } from '@testing-library/react';
import ProjectDetails from '../Experience/ProjectDetails';
import { experiences } from '../../data/experiences';

describe('ProjectDetails Component', () => {
    const mockProject = experiences[0].projects[0];
    const mockOnNext = jest.fn();
    const mockOnPrev = jest.fn();

    // Mock des méthodes natives de HTMLDialogElement pour JSDOM
    beforeAll(() => {
        HTMLDialogElement.prototype.showModal = jest.fn(function (this: HTMLDialogElement) {
            this.open = true;
        });
        HTMLDialogElement.prototype.close = jest.fn(function (this: HTMLDialogElement) {
            this.open = false;
        });
    });

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
            const itemText = typeof item === 'string' ? item : item.name;
            expect(screen.getByText(itemText)).toBeInTheDocument();
        });
    });

    test('opens technology details modal when a realization item provides extra content', () => {
        const projectWithTechnologyDetails = {
            ...mockProject,
            realization: [
                {
                    name: 'experience.apf.projects.actions_associatives.realization.tache1',
                    description: 'experience.apf.projects.actions_associatives.realization.tache1.description',
                    image: '/IHttpClientFactory.jpg'
                }
            ]
        };

        render(
            <ProjectDetails
                project={projectWithTechnologyDetails}
                onNext={mockOnNext}
                onPrev={mockOnPrev}
                hasNext={true}
                hasPrev={true}
                currentIndex={0}
                totalProjects={1}
            />
        );

        // Clic sur "En savoir plus"
        fireEvent.click(screen.getByRole('button', { name: /common\.learn_more_about/i }));

        // Vérification de la présence de la modale et de son contenu
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText(projectWithTechnologyDetails.realization[0].description)).toBeInTheDocument();
        expect(screen.getAllByRole('button', { name: /common\.close|fermer/i })).toHaveLength(2);
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

        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]);
        expect(mockOnPrev).toHaveBeenCalled();

        fireEvent.click(buttons[1]);
        expect(mockOnNext).toHaveBeenCalled();
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