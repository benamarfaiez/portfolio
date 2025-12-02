import { render, screen } from '@testing-library/react';
import { experiences } from '../../data/experiences';

// Mock scroll to top
window.scrollTo = jest.fn();

// Mock react-router-dom hooks before any component imports
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    useParams: () => ({ slug: 'euro-information-developer' }),
    useNavigate: () => mockNavigate,
    Link: ({ children, to, ...props }: any) => <a href={to} {...props}>{children}</a>,
}));

// Import component AFTER mocks are set up
import ExperienceDetail from '../Experience/ExperienceDetail';

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
