import { render, screen } from '@testing-library/react';
import { AnimatedSection } from '../AnimatedSection';

const mockUseReducedMotion = jest.fn();

jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      className,
      custom,
      initial,
      whileInView,
      viewport,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement> & {
      custom?: number;
      initial?: string;
      whileInView?: string;
      viewport?: unknown;
    }) => (
      <div
        {...rest}
        className={className}
        data-custom={custom}
        data-initial={initial}
        data-while-in-view={whileInView}
        data-viewport={JSON.stringify(viewport)}
      >
        {children}
      </div>
    ),
  },
  useReducedMotion: () => mockUseReducedMotion(),
}));

const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

describe('AnimatedSection', () => {
  beforeEach(() => {
    mockUseReducedMotion.mockReturnValue(false);
  });

  test('passes animation and layout options to the motion element', () => {
    const viewportOptions = { once: false, margin: '10px' } as const;

    render(
      <AnimatedSection
        id="education"
        variants={variants}
        className="section"
        initial="from"
        whileInView="shown"
        viewportOptions={viewportOptions}
        customIndex={2}
      >
        <span>Education content</span>
      </AnimatedSection>
    );

    const section = screen.getByText('Education content').parentElement;
    expect(section).toHaveAttribute('id', 'education');
    expect(section).toHaveClass('section');
    expect(section).toHaveAttribute('data-custom', '2');
    expect(section).toHaveAttribute('data-initial', 'from');
    expect(section).toHaveAttribute('data-while-in-view', 'shown');
    expect(section).toHaveAttribute('data-viewport', JSON.stringify(viewportOptions));
  });

  test('starts visible when reduced motion is enabled', () => {
    mockUseReducedMotion.mockReturnValue(true);

    render(
      <AnimatedSection variants={variants} initial="hidden" whileInView="visible">
        <span>Reduced motion content</span>
      </AnimatedSection>
    );

    expect(screen.getByText('Reduced motion content').parentElement).toHaveAttribute(
      'data-initial',
      'visible'
    );
  });
});
