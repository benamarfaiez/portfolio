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

    // Note: Testing useEffect behavior often requires re-rendering or changing mock return values and re-rendering.
    // Since we mock useLocation at module level, we might need a more dynamic mock to test effect triggers.
});
