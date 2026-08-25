import { useState, FormEvent, useEffect, useRef } from 'react';
import { sendContactEmail } from '../services/emailService';
import { FormState } from '../types/contact';

export function useContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Nettoyage du timer si le composant est démonté pendant le décompte
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setFormState({ status: 'loading' });

    try {
      await sendContactEmail(form);
      setFormState({ status: 'success' });

      timerRef.current = setTimeout(() => {
        form.reset();
        setFormState({ status: 'idle' });
      }, 2000);
    } catch (error) {
      setFormState({
        status: 'error',
        errorMessage: error instanceof Error && error.message.startsWith('Configuration EmailJS manquante')
          ? error.message
          : "Erreur lors de l'envoi du message. Veuillez réessayer.",
      });
    }
  };

  return {
    formState,
    isSubmitting: formState.status === 'loading',
    handleSubmit,
  };
}