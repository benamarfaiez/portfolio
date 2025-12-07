import { render, screen } from '@testing-library/react';
import { experiences } from '../../data/experiences';
import ExperienceDetail from '../Experience/ExperienceDetail';
import { LinkProps } from 'react-router-dom';

// Mock scroll to top
window.scrollTo = jest.fn();

// Mock react-router-dom hooks before any component imports
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useParams: () => ({ slug: 'euro-information-developer' }),
    useNavigate: () => mockNavigate,
    useLocation: () => ({ state: null }),
    Link: ({ children, to, ...props }: React.PropsWithChildren<LinkProps>) => <a href={to as string} {...props}>{children}</a>,
}));

describe('ExperienceDetail Component', () => {
    const validSlug = 'euro-information-developer';
    const experience = experiences.find(e => e.slug === validSlug);

    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test('renders experience details correctly', () => {
        render(<ExperienceDetail />);

        expect(screen.getByText('common.back_to_list')).toBeInTheDocument();
        if (experience) {
            expect(screen.getByText(experience.role)).toBeInTheDocument();
        }
    });

    test('renders navigation elements', () => {
        render(<ExperienceDetail />);

        // Verify back button text is present
        expect(screen.getByText('common.back_to_list')).toBeInTheDocument();
        // Verify project navigation exists (previous/next project buttons)
        expect(screen.queryAllByRole('button').length).toBeGreaterThan(0);
    });
});
