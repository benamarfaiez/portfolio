import { render, screen } from '@testing-library/react';
import Certifications from '../Certifications';
import { certifications } from '../../data/certifications';

describe('Certifications component', () => {

    test('renders all certification items', () => {
        render(<Certifications />);

        certifications.forEach((certif) => {
            expect(screen.getAllByText(certif.title).length).toBeGreaterThan(0);
            expect(screen.getAllByText(certif.date).length).toBeGreaterThan(0);
            expect(screen.getAllByText(certif.issuer).length).toBeGreaterThan(0);
        });
    });

});
