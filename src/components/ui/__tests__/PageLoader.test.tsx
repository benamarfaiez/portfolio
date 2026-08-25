import { render, screen } from '@testing-library/react';
import { PageLoader } from '../PageLoader';

describe('PageLoader', () => {
  test('renders an accessible loading status', () => {
    render(<PageLoader />);

    expect(screen.getByRole('status', { name: 'Chargement' })).toBeInTheDocument();
  });
});
