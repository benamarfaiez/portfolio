import { cardSlideVariants } from '../educationVariants';

describe('cardSlideVariants', () => {
  test('slides even cards in from the left', () => {
    expect(cardSlideVariants.hidden(0)).toEqual({ opacity: 0, x: -20 });
    expect(cardSlideVariants.visible(0)).toEqual({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0, ease: 'easeOut' },
    });
  });

  test('slides odd cards in from the right with an indexed delay', () => {
    expect(cardSlideVariants.hidden(1)).toEqual({ opacity: 0, x: 20 });
    expect(cardSlideVariants.visible(3)).toEqual({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.30000000000000004, ease: 'easeOut' },
    });
  });
});
