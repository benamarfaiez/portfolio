import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useBackNavigation(fallbackPath: string = '/#experience') {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = useCallback(() => {
    if (location.state?.from === 'list') {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  }, [navigate, location.state, fallbackPath]);

  return handleBack;
}