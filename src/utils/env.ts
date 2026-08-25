export const getEnvVar = (key: string): string | undefined => {
  try {
    // Masque import.meta du parser Babel/Jest lors de l'analyse statique
    const getImportMetaEnv = new Function('return import.meta.env');
    const env = getImportMetaEnv();
    return env ? (env[key] as string | undefined) : undefined;
  } catch {
    // Fallback pour Jest / Node (process.env)
    return process.env[key];
  }
};