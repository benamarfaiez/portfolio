import { useState, useCallback } from 'react';

export function useProjectPagination(totalProjects: number = 0) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalProjects - 1 ? prev + 1 : prev));
  }, [totalProjects]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  return {
    currentIndex,
    nextProject,
    prevProject,
    hasNext: currentIndex < totalProjects - 1,
    hasPrev: currentIndex > 0,
  };
}