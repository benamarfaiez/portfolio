export const toggleTheme = jest.fn();
export const useTheme = () => ({
    theme: 'light',
    toggleTheme,
});
