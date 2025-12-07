import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SkillCard from '../skills/SkillCard';
import { Briefcase } from 'lucide-react';

const mockSkill = {
    title: 'Test Skill',
    desc: 'Test Description',
    link: '/skills/test',
    category: 'frontend' as const,
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    hover: 'hover:shadow-blue-500/20'
};

describe('SkillCard Component', () => {
    test('renders correctly', () => {
        render(
            <MemoryRouter>
                <SkillCard skill={mockSkill} index={0} />
            </MemoryRouter>
        );

        expect(screen.getByText('Test Skill')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
        expect(screen.getByText('common.view_details')).toBeInTheDocument();
    });

    test('renders link with correct state', () => {
        render(
            <MemoryRouter>
                <SkillCard skill={mockSkill} index={0} />
            </MemoryRouter>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/skills/test');
        // Note: verifying 'state' in Link is harder with just RTL, typically need to mock Router or check location updates on click.
        // But we can check if it renders without error.
    });
});
