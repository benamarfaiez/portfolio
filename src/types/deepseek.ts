// src/types/deepseek.ts
export interface DeepSeekMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface UseDeepSeekReturn {
  messages: DeepSeekMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  isConfigured: boolean;
}