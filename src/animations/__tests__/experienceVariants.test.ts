import { fadeInVariants } from '../experienceVariants';

describe('fadeInVariants', () => {
  test('starts hidden with a slight vertical offset', () => {
    expect(fadeInVariants.hidden()).toEqual({ opacity: 0, y: 20 });
  });

  test('becomes visible with a fade and indexed delay', () => {
    expect(fadeInVariants.visible()).toEqual({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0 },
    });

    expect(fadeInVariants.visible(3)).toEqual({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.30000000000000004 },
    });
  });
});
