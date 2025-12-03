// Helper to get Vite environment variables
// This can be mocked in tests
export const getEnvVar = (key: string): string | undefined => {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
        return import.meta.env[key] as string | undefined;
    }
    return undefined;
};
