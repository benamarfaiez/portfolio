import { TargetAndTransition } from 'framer-motion';

export const cardSlideVariants = {
  hidden: (index: number): TargetAndTransition => ({
    opacity: 0,
    x: index % 2 === 0 ? -20 : 20,
  }),
  visible: (index: number): TargetAndTransition => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: 'easeOut',
    },
  }),
};