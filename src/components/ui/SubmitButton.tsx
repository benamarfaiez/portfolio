import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  loadingLabel: string;
  children: ReactNode;
}

export function SubmitButton({ isSubmitting, loadingLabel, children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="animate-spin h-5 w-5" aria-hidden="true" />
          <span>{loadingLabel}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}