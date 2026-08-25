import { lazy, Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { routes } from '../routes';

jest.mock('../HomePage', () => ({
  __esModule: true,
  default: () => <div>Home page</div>,
}));

jest.mock('../components/Experience/ExperienceDetail', () => ({
  __esModule: true,
  default: () => <div>Experience detail</div>,
}));

jest.mock('../components/skills/SkillsCategory', () => ({
  __esModule: true,
  default: () => <div>Skills category</div>,
}));

jest.mock('../components/NotFound', () => ({
  __esModule: true,
  default: () => <div>Not found</div>,
}));

describe('routes', () => {
  test('defines the application routes in order', () => {
    expect(routes.map((route) => route.path)).toEqual([
      '/',
      '/experiences/:slug',
      '/skills/:category',
      '*',
    ]);
  });

  test('uses a lazy component for every route', () => {
    for (const route of routes) {
      expect(route.component).toHaveProperty('$$typeof', lazy(() => Promise.resolve({ default: () => null })).$$typeof);
    }
  });

  test.each([
    ['/', 'Home page'],
    ['/experiences/:slug', 'Experience detail'],
    ['/skills/:category', 'Skills category'],
    ['*', 'Not found'],
  ])('loads the component configured for %s', async (path, content) => {
    const route = routes.find((candidate) => candidate.path === path);
    const RouteComponent = route?.component;

    expect(RouteComponent).toBeDefined();

    render(
      <Suspense fallback={<div>Loading route</div>}>
        {RouteComponent && <RouteComponent />}
      </Suspense>
    );

    await waitFor(() => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  test('does not mark routes as exact by default', () => {
    expect(routes.every((route) => route.isExact === undefined)).toBe(true);
  });
});