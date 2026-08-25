// components/ContactInfoList.tsx
import { useContactItems } from '../../hooks/useContactItems';
import { ContactInfoItem } from './ContactInfoItem';

export function ContactInfoList() {
  const contactItems = useContactItems();

  return (
    <ul className="space-y-6">
      {contactItems.map((item) => (
        <li key={item.id}>
          <ContactInfoItem item={item} />
        </li>
      ))}
    </ul>
  );
}