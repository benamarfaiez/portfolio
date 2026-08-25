// components/ui/FormStatusAlert.tsx

import { FormState } from "../../types/contact";

interface FormStatusAlertProps {
  formState: FormState;
  successMessage: string;
}

export function FormStatusAlert({ formState, successMessage }: FormStatusAlertProps) {
  if (formState.status === 'idle' || formState.status === 'loading') {
    return null;
  }

  const isSuccess = formState.status === 'success';

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`p-4 rounded-lg border text-sm font-medium ${
        isSuccess
          ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
          : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
      }`}
    >
      <p>
        {isSuccess ? successMessage : `✗ ${formState.errorMessage}`}
      </p>
    </div>
  );
}