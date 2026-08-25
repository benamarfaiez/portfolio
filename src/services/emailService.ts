import emailjs from '@emailjs/browser';
import { getEnvVar } from '../utils/env';

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

function getEmailJSConfig(): EmailJSConfig {
const serviceId = getEnvVar('VITE_EMAILJS_SERVICE_ID');
const templateId = getEnvVar('VITE_EMAILJS_TEMPLATE_ID');
const publicKey = getEnvVar('VITE_EMAILJS_PUBLIC_KEY');

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Configuration EmailJS manquante. Veuillez contacter l'administrateur.");
  }

  return { serviceId, templateId, publicKey };
}

export async function sendContactEmail(formElement: HTMLFormElement): Promise<void> {
  const { serviceId, templateId, publicKey } = getEmailJSConfig();
  await emailjs.sendForm(serviceId, templateId, formElement, publicKey);
}