import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';

function BrokenChild() {
  throw new Error('render failed');
}

describe('ErrorBoundary', () => {
  let consoleError: jest.SpyInstance;

  beforeEach(() => {
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  test('renders its children when there is no error', () => {
    render(
      <ErrorBoundary>
        <span>Content</span>
      </ErrorBoundary>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders the provided fallback after a child error', () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <BrokenChild />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom fallback')).toBeInTheDocument();
  });

  test('renders the default fallback after a child error', () => {
    render(
      <ErrorBoundary>
        <BrokenChild />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Une erreur s\'est produite');
  });
});
