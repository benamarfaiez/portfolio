import { TargetAndTransition } from 'framer-motion';

export const fadeInVariants = {
  hidden: (): TargetAndTransition => ({
    opacity: 0, y: 20
  }),
  visible: (customIndex: number = 0): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: customIndex * 0.1,
    },
  }),
};