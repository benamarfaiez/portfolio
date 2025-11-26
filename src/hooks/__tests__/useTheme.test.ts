import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../useTheme';

describe('useTheme Hook', () => {
    beforeEach(() => {
        // Clear localStorage and document classes
        localStorage.clear();
        document.documentElement.classList.remove('light', 'dark');
        jest.clearAllMocks();
    });

    test('initializes with default theme (light if no preference)', () => {
        // Mock matchMedia to return false for dark mode
        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));

        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe('light');
        expect(document.documentElement.classList.contains('light')).toBe(true);
    });

    test('initializes with dark theme if system preference is dark', () => {
        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: true,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));

        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    test('initializes with saved theme from localStorage', () => {
        localStorage.setItem('theme', 'dark');
        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    test('toggles theme', () => {
        const { result } = renderHook(() => useTheme());

        // Initial state (assuming light due to mock in setup or default)
        // Let's force it to start known
        // Actually, we can just check it toggles
        const initialTheme = result.current.theme;

        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).not.toBe(initialTheme);
        expect(localStorage.getItem('theme')).toBe(result.current.theme);
        expect(document.documentElement.classList.contains(result.current.theme)).toBe(true);
    });
});
