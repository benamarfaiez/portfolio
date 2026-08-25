import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

jest.mock('../components/hero/Hero', () => ({
  __esModule: true,
  default: () => <div>Hero section</div>,
}));

jest.mock('../components/About', () => ({
  __esModule: true,
  default: () => <div>About section</div>,
}));

jest.mock('../components/Experience/Experience', () => ({
  __esModule: true,
  default: () => <div>Experience section</div>,
}));

jest.mock('../components/skills/Skills', () => ({
  __esModule: true,
  default: () => <div>Skills section</div>,
}));

jest.mock('../components/Education/Education', () => ({
  __esModule: true,
  default: () => <div>Education section</div>,
}));

jest.mock('../components/Certifications/Certifications', () => ({
  __esModule: true,
  default: () => <div>Certifications section</div>,
}));

jest.mock('../components/Contact/Contact', () => ({
  __esModule: true,
  default: () => <div>Contact section</div>,
}));

describe('HomePage', () => {
  test('renders all portfolio sections in page order', async () => {
    render(<HomePage />);

    const sections = await screen.findAllByText(/section$/);

    expect(sections.map((section) => section.textContent)).toEqual([
      'Hero section',
      'About section',
      'Experience section',
      'Skills section',
      'Education section',
      'Certifications section',
      'Contact section',
    ]);
  });
});
