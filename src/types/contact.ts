// types/contact.ts
import { LucideIcon } from 'lucide-react';

export interface ContactItem {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string | null;
}

export interface ContactInfoItemProps {
  item: ContactItem;
}

export type FormState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success' }
  | { status: 'error'; errorMessage: string };