import emailjs from '@emailjs/browser';

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

function getEmailJSConfig(): EmailJSConfig {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Configuration EmailJS manquante. Veuillez contacter l'administrateur.");
  }

  return { serviceId, templateId, publicKey };
}

export async function sendContactEmail(formElement: HTMLFormElement): Promise<void> {
  const { serviceId, templateId, publicKey } = getEmailJSConfig();
  await emailjs.sendForm(serviceId, templateId, formElement, publicKey);
}