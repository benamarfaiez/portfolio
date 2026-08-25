// components/ContactForm.tsx
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import { InputField, TextareaField } from '../ui/FormField';
import { FormStatusAlert } from '../ui/FormStatusAlert';
import { SubmitButton } from '../ui/SubmitButton';

export function ContactForm() {
  const { t } = useTranslation();
  const { formState, isSubmitting, handleSubmit } = useContactForm();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <InputField
          id="email"
          autocomplete="email"
          name="user_email"
          type="email"
          label={t('contact.form.email')}
          placeholder={t('contact.form.placeholder.email')}
          required
          disabled={isSubmitting}
        />

        <TextareaField
          id="message"
          name="message"
          label={t('contact.form.message')}
          placeholder={t('contact.form.placeholder.message')}
          required
          disabled={isSubmitting}
        />

        <FormStatusAlert
          formState={formState}
          successMessage={t('contact.success')}
        />

        <SubmitButton isSubmitting={isSubmitting} loadingLabel={t('contact.loading')}>
          {t('contact.form.send')} <Send size={18} aria-hidden="true" />
        </SubmitButton>

      </form>
    </div>
  );
}