import { useMemo } from 'react';
import { Experience } from '../types/experiences';

export function useAdjacentExperiences(
  currentSlug: string,
  experiences: Experience[]
) {
  return useMemo(() => {
    const currentIndex = experiences.findIndex((exp) => exp.slug === currentSlug);

    if (currentIndex === -1) {
      return { previousExperience: null, nextExperience: null };
    }

    const previousExperience = currentIndex > 0 ? experiences[currentIndex - 1] : null;
    const nextExperience =
      currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null;

    return { previousExperience, nextExperience };
  }, [currentSlug, experiences]);
}