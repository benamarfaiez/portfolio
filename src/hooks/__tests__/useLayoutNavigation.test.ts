import { renderHook, act } from '@testing-library/react';
import { useLayoutNavigation } from '../useLayoutNavigation';

// Mock react-router-dom
const mockNavigate = jest.fn();
let mockLocation = { pathname: '/', hash: '', search: '', state: null, key: 'default' };
let mockNavType = 'PUSH';

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
    useNavigationType: () => mockNavType,
}));

describe('useLayoutNavigation', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockLocation = { pathname: '/', hash: '', search: '', state: null, key: 'default' };
        mockNavType = 'PUSH';
        window.scrollTo = jest.fn();
        Element.prototype.scrollIntoView = jest.fn();
    });

    test('toggles menu state', () => {
        const { result } = renderHook(() => useLayoutNavigation());

        expect(result.current.isMenuOpen).toBe(false);

        act(() => {
            result.current.toggleMenu();
        });
        expect(result.current.isMenuOpen).toBe(true);

        act(() => {
            result.current.toggleMenu();
        });
        expect(result.current.isMenuOpen).toBe(false);
    });

    test('handleNavigation navigates to route if not home', () => {
        mockLocation = { pathname: '/about', hash: '', search: '', state: null, key: 'key' };
        const { result } = renderHook(() => useLayoutNavigation());
        const e = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLAnchorElement>;

        act(() => {
            result.current.handleNavigation(e, '/contact');
        });

        expect(e.preventDefault).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('/contact');
        expect(result.current.isMenuOpen).toBe(false);
    });

    test('handleNavigation scrolls to top if on home and no hash', () => {
        mockLocation = { pathname: '/', hash: '', search: '', state: null, key: 'key' };
        const { result } = renderHook(() => useLayoutNavigation());
        const e = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLAnchorElement>;

        act(() => {
            result.current.handleNavigation(e, '/');
        });

        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    test('useEffect scrolls to element when hash is present', () => {
        jest.useFakeTimers();
        mockLocation = { pathname: '/', hash: '#about', search: '', state: null, key: 'key' };

        const scrollIntoViewMock = jest.fn();
        const mockElement = { scrollIntoView: scrollIntoViewMock };
        jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

        renderHook(() => useLayoutNavigation());

        act(() => {
            jest.runAllTimers();
        });

        expect(document.querySelector).toHaveBeenCalledWith('#about');
        expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

        jest.useRealTimers();
    });

    test('handleNavigation scrolls to element if on home and hash is present', () => {
        mockLocation = { pathname: '/', hash: '', search: '', state: null, key: 'key' };
        const { result } = renderHook(() => useLayoutNavigation());
        const e = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLAnchorElement>;

        const scrollIntoViewMock = jest.fn();
        const mockElement = { scrollIntoView: scrollIntoViewMock };
        jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

        act(() => {
            result.current.handleNavigation(e, '/#contact');
        });

        expect(document.querySelector).toHaveBeenCalledWith('#contact');
        expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
    test('useEffect does nothing if element is not found', () => {
        jest.useFakeTimers();
        mockLocation = { pathname: '/', hash: '#missing', search: '', state: null, key: 'key' };

        jest.spyOn(document, 'querySelector').mockReturnValue(null);

        renderHook(() => useLayoutNavigation());

        act(() => {
            jest.runAllTimers();
        });

        expect(document.querySelector).toHaveBeenCalledWith('#missing');
        // No crash, and no scrollIntoView called (implicit)
        jest.useRealTimers();
    });

    test('handleNavigation does nothing if element is not found', () => {
        mockLocation = { pathname: '/', hash: '', search: '', state: null, key: 'key' };
        const { result } = renderHook(() => useLayoutNavigation());
        const e = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLAnchorElement>;

        jest.spyOn(document, 'querySelector').mockReturnValue(null);

        act(() => {
            result.current.handleNavigation(e, '/#missing');
        });

        expect(document.querySelector).toHaveBeenCalledWith('#missing');
    });
});
