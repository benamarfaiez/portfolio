import { renderHook, act, waitFor } from '@testing-library/react';
import { useLayoutNavigation } from '../useLayoutNavigation';
import { useNavigate, useLocation } from 'react-router-dom';

// Mock react-router-dom
const mockNavigate = jest.fn();
const mockUseLocation = jest.fn();
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
    useLocation: () => mockUseLocation(),
}));

// Mock DOM methods
const mockScrollIntoView = jest.fn();
const mockQuerySelector = jest.fn();
window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
document.querySelector = mockQuerySelector;
window.scrollTo = jest.fn();

describe('useLayoutNavigation', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockUseLocation.mockReturnValue({ pathname: '/', hash: '' });
    });

    describe('Initial state', () => {
        test('initializes with menu closed', () => {
            const { result } = renderHook(() => useLayoutNavigation());
            expect(result.current.isMenuOpen).toBe(false);
        });
    });

    describe('toggleMenu', () => {
        test('toggles menu open and closed', () => {
            const { result } = renderHook(() => useLayoutNavigation());

            act(() => {
                result.current.toggleMenu();
            });
            expect(result.current.isMenuOpen).toBe(true);

            act(() => {
                result.current.toggleMenu();
            });
            expect(result.current.isMenuOpen).toBe(false);
        });
    });

    describe('setIsMenuOpen', () => {
        test('sets menu open state directly', () => {
            const { result } = renderHook(() => useLayoutNavigation());

            act(() => {
                result.current.setIsMenuOpen(true);
            });
            expect(result.current.isMenuOpen).toBe(true);

            act(() => {
                result.current.setIsMenuOpen(false);
            });
            expect(result.current.isMenuOpen).toBe(false);
        });
    });

    describe('useEffect - hash scrolling', () => {
        test('scrolls to element when hash is present', async () => {
            const mockElement = document.createElement('div');
            mockQuerySelector.mockReturnValue(mockElement);
            mockUseLocation.mockReturnValue({ pathname: '/', hash: '#about' });

            renderHook(() => useLayoutNavigation());

            await waitFor(() => {
                expect(mockQuerySelector).toHaveBeenCalledWith('#about');
                expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
            }, { timeout: 200 });
        });

        test('does not scroll when hash element not found', async () => {
            mockQuerySelector.mockReturnValue(null);
            mockUseLocation.mockReturnValue({ pathname: '/', hash: '#notfound' });

            renderHook(() => useLayoutNavigation());

            await waitFor(() => {
                expect(mockQuerySelector).toHaveBeenCalledWith('#notfound');
            }, { timeout: 200 });

            expect(mockScrollIntoView).not.toHaveBeenCalled();
        });

        test('scrolls to top when on home page with no hash', () => {
            mockUseLocation.mockReturnValue({ pathname: '/', hash: '' });

            renderHook(() => useLayoutNavigation());

            expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
        });

        test('does not scroll when not on home page and no hash', () => {
            mockUseLocation.mockReturnValue({ pathname: '/other', hash: '' });

            renderHook(() => useLayoutNavigation());

            expect(window.scrollTo).not.toHaveBeenCalled();
            expect(mockQuerySelector).not.toHaveBeenCalled();
        });
    });

    describe('handleNavigation', () => {
        test('scrolls to target element on home page with hash', () => {
            const mockElement = document.createElement('div');
            mockQuerySelector.mockReturnValue(mockElement);
            mockUseLocation.mockReturnValue({ pathname: '/', hash: '' });

            const { result } = renderHook(() => useLayoutNavigation());

            const mockEvent = {
                preventDefault: jest.fn(),
            } as unknown as React.MouseEvent<HTMLAnchorElement>;

            act(() => {
                result.current.handleNavigation(mockEvent, '/#about');
            });

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(mockQuerySelector).toHaveBeenCalledWith('#about');
            expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
            expect(result.current.isMenuOpen).toBe(false);
        });

        test('scrolls to top on home page without hash', () => {
            mockUseLocation.mockReturnValue({ pathname: '/', hash: '' });

            const { result } = renderHook(() => useLayoutNavigation());

            const mockEvent = {
                preventDefault: jest.fn(),
            } as unknown as React.MouseEvent<HTMLAnchorElement>;

            act(() => {
                result.current.handleNavigation(mockEvent, '/');
            });

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
            expect(result.current.isMenuOpen).toBe(false);
        });

        test('navigates when not on home page', () => {
            mockUseLocation.mockReturnValue({ pathname: '/other', hash: '' });

            const { result } = renderHook(() => useLayoutNavigation());

            const mockEvent = {
                preventDefault: jest.fn(),
            } as unknown as React.MouseEvent<HTMLAnchorElement>;

            act(() => {
                result.current.handleNavigation(mockEvent, '/#about');
            });

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith('/#about');
            expect(result.current.isMenuOpen).toBe(false);
        });

        test('does not scroll when target element not found on home page', () => {
            mockQuerySelector.mockReturnValue(null);
            mockUseLocation.mockReturnValue({ pathname: '/', hash: '' });

            const { result } = renderHook(() => useLayoutNavigation());

            const mockEvent = {
                preventDefault: jest.fn(),
            } as unknown as React.MouseEvent<HTMLAnchorElement>;

            act(() => {
                result.current.handleNavigation(mockEvent, '/#notfound');
            });

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(mockQuerySelector).toHaveBeenCalledWith('#notfound');
            expect(mockScrollIntoView).not.toHaveBeenCalled();
            expect(result.current.isMenuOpen).toBe(false);
        });

        test('closes menu after navigation', () => {
            mockUseLocation.mockReturnValue({ pathname: '/', hash: '' });

            const { result } = renderHook(() => useLayoutNavigation());

            // Open menu first
            act(() => {
                result.current.setIsMenuOpen(true);
            });
            expect(result.current.isMenuOpen).toBe(true);

            // Navigate
            const mockEvent = {
                preventDefault: jest.fn(),
            } as unknown as React.MouseEvent<HTMLAnchorElement>;

            act(() => {
                result.current.handleNavigation(mockEvent, '/');
            });

            expect(result.current.isMenuOpen).toBe(false);
        });
    });
});
