import { render, screen } from '@testing-library/react';
import ExperienceDetail from '../Experience/ExperienceDetail';
import { experiences } from '../../data/experiences';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
    useParams: () => ({ slug: 'euro-information-developer' }),
    useNavigate: () => jest.fn(),
    Link: ({ children, to, className }: any) => <a href={to} className={className} data-testid="mock-link">{children}</a>,
}));

// Mock scroll to top
window.scrollTo = jest.fn();

describe('ExperienceDetail Component', () => {
    const validSlug = 'euro-information-developer';
    const experience = experiences.find(e => e.slug === validSlug);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.skip('renders experience details correctly', () => {
        render(<ExperienceDetail />);

        expect(screen.getByText('common.back_to_list')).toBeInTheDocument();
        if (experience) {
            expect(screen.getByText(experience.role)).toBeInTheDocument();
        }
    });

    test.skip('navigates back to list when back button is clicked', () => {
        render(<ExperienceDetail />);

        const links = screen.getAllByTestId('mock-link');
        const backLink = links.find(link => link.getAttribute('href') === '/');
        expect(backLink).toBeInTheDocument();
    });
});
