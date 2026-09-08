import React, { useState } from 'react';
import { CompanyLogoProps } from '../../types/experiences';

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) return null;

  return (
    <img
      src={src}
      alt={alt}
      className="h-8 object-contain rounded-md p-0.5"
      onError={() => setHasError(true)}
    />
  );
};