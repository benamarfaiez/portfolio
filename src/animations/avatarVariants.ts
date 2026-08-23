import { Variants } from 'framer-motion';

export const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, delay: 0.2 }
  },
};


export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};