// src/config/env.ts
class Environment {
  public get deepseekApiKey(): string {
    return import.meta.env.VITE_DEEPSEEK_API_KEY || '';
  }

  public get isDevelopment(): boolean {
    return import.meta.env.DEV === true;
  }

  public get isProduction(): boolean {
    return import.meta.env.PROD === true;
  }

  public get appName(): string {
    return import.meta.env.VITE_APP_NAME || 'DeepSeek Chat';
  }
}

export const env = new Environment();