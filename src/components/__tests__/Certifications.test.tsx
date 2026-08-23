import { render, screen } from '@testing-library/react';
import Certifications from '../Certifications/Certifications';
import { certifications } from '../../data/certifications';

describe('Certifications Component', () => {
    test('renders correctly and matches snapshot', () => {
        const { container } = render(<Certifications />);
        expect(container).toMatchSnapshot();
    });

    test('renders section title', () => {
        render(<Certifications />);
        expect(screen.getByText('certifications.title')).toBeInTheDocument();
    });

    test('renders all certifications', () => {
        render(<Certifications />);
        certifications.forEach(cert => {
            // Check title - use getAllByText as some titles might be duplicated
            expect(screen.getAllByText(cert.title).length).toBeGreaterThan(0);
            // Check issuer and date
            expect(screen.getAllByText(`${cert.issuer} - ${cert.date}`).length).toBeGreaterThan(0);
        });
    });

    test('renders correct links for certifications', () => {
        render(<Certifications />);
        certifications.forEach(cert => {
            const links = screen.getAllByRole('link', { name: cert.title });
            // Should have at least one link
            expect(links.length).toBeGreaterThan(0);
            const link = links[0];
            expect(link).toHaveAttribute('href', cert.credentialUrl);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

    test('renders two columns', () => {
        const { container } = render(<Certifications />);
        const columns = container.querySelectorAll('.grid > ul');
        expect(columns).toHaveLength(2);
    });
});
