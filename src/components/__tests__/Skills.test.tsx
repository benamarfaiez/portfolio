import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Skills from '../skills/Skills';
import { skills } from '../../data/skills';

describe('Skills Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <Skills />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    test('renders section title', () => {
        render(
            <MemoryRouter>
                <Skills />
            </MemoryRouter>
        );
        expect(screen.getByText('skills.title')).toBeInTheDocument();
    });

    test('renders all skill categories', () => {
        render(
            <MemoryRouter>
                <Skills />
            </MemoryRouter>
        );
        skills.forEach(skill => {
            expect(screen.getByText(skill.title)).toBeInTheDocument();
            expect(screen.getByText(skill.desc)).toBeInTheDocument();
        });
    });

    test('renders links for each category', () => {
        render(
            <MemoryRouter>
                <Skills />
            </MemoryRouter>
        );
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(skills.length);

        skills.forEach(skill => {
            // Check if link exists with correct href
            // Note: We look for the link that contains the title
            const link = links.find(l => l.getAttribute('href') === skill.link);
            expect(link).toBeInTheDocument();
            expect(link).toHaveTextContent(skill.title);
        });
    });
});
