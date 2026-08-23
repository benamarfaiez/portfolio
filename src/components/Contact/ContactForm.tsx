import { useTranslation } from 'react-i18next';
import { Send, Loader2 } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

export function ContactForm() {
  const { t } = useTranslation();
  const { formState, isSubmitting, handleSubmit } = useContactForm();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 mt-[58px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={t('contact.form.placeholder.email')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={t('contact.form.placeholder.message')}
          />
        </div>

        {formState.status === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-200 text-sm font-medium">
              {t('contact.success')}
            </p>
          </div>
        )}

        {formState.status === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200 text-sm font-medium">
              ✗ {formState.errorMessage}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" />
              {t('contact.loading')}
            </>
          ) : (
            <>
              {t('contact.form.send')} <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}