// src/hooks/useDeepSeek.ts
import { useState, useCallback } from 'react';
import { env } from '../config/env';
import { DeepSeekMessage, UseDeepSeekReturn } from '../types/deepseek';

export const useDeepSeek = (): UseDeepSeekReturn => {
  const [messages, setMessages] = useState<DeepSeekMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = env.deepseekApiKey;
  const isConfigured = !!apiKey && apiKey.length > 10 && !apiKey.includes('votre_cle_api');

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) {
      setError('Veuillez écrire un message');
      return;
    }

    if (!isConfigured) {
      setError('Clé API DeepSeek non configurée');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Ajouter le message utilisateur
      const userMessage: DeepSeekMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: content.trim(),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);

      // Appeler l'API DeepSeek
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile', // Modèle gratuit
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            ...messages,
            { role: 'user', content }
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `Erreur API: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const assistantMessage: DeepSeekMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.choices[0].message.content,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Format de réponse invalide');
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      
      if (env.isDevelopment) {
        console.error('Erreur DeepSeek:', err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, messages, isConfigured]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    isConfigured,
  };
};