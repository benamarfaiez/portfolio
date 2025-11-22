export const Constants = {
  API: {
    DEEPSEEK: {
      BASE_URL: 'https://api.deepseek.com',
      ENDPOINTS: {
        CHAT: '/chat/completions',
      },
      MODELS: {
        CHAT: 'deepseek-chat',
        CODER: 'deepseek-coder',
      },
    },
  },
} as const;