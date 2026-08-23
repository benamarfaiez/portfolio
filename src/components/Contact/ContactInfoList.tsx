import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../../data/data';

export function ContactInfoList() {
  const { t } = useTranslation();

  const items = [
    {
      icon: Mail,
      label: t('common.email'),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: t('common.phone'),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: t('common.location'),
      value: t('contact.location'),
      href: null,
    },
  ];

  return (
    <div className="space-y-6">
      {items.map(({ icon: Icon, label, value, href }, index) => {
        const Content = (
          <>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
              <Icon size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
              <p className="font-medium text-slate-900 dark:text-white">{value}</p>
            </div>
          </>
        );

        const className = "flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all group";

        return href ? (
          <a key={index} href={href} className={className}>
            {Content}
          </a>
        ) : (
          <div key={index} className={className}>
            {Content}
          </div>
        );
      })}
    </div>
  );
}