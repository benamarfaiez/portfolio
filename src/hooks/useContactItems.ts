// hooks/useContactItems.ts
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/data';
import { ContactItem } from '../types/contact';

export function useContactItems(): ContactItem[] {
  const { t } = useTranslation();

  return [
    {
      id: 'email',
      icon: Mail,
      label: t('common.email'),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      id: 'phone',
      icon: Phone,
      label: t('common.phone'),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      id: 'location',
      icon: MapPin,
      label: t('common.location'),
      value: t('contact.location'),
      href: null,
    },
  ];
}