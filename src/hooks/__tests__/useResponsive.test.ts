import { renderHook, act } from '@testing-library/react';
import { useResponsive } from '../useResponsive';

describe('useResponsive', () => {
    // Store original window.innerWidth
    const originalInnerWidth = window.innerWidth;

    // Helper to trigger resize event
    const resizeWindow = (width: number) => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: width,
        });
        window.dispatchEvent(new Event('resize'));
    };

    afterEach(() => {
        // Restore original window size
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: originalInnerWidth,
        });
    });

    it('should return isMobile true for width <= 767px', () => {
        act(() => {
            resizeWindow(375); // iPhone size
        });

        const { result } = renderHook(() => useResponsive());

        expect(result.current.isMobile).toBe(true);
        expect(result.current.isTablet).toBe(false);
        expect(result.current.isDesktop).toBe(false);
        expect(result.current.width).toBe(375);
    });

    it('should return isTablet true for width between 768px and 1023px', () => {
        act(() => {
            resizeWindow(768); // iPad size
        });

        const { result } = renderHook(() => useResponsive());

        expect(result.current.isMobile).toBe(false);
        expect(result.current.isTablet).toBe(true);
        expect(result.current.isDesktop).toBe(false);
        expect(result.current.width).toBe(768);
    });

    it('should return isDesktop true for width >= 1024px', () => {
        act(() => {
            resizeWindow(1440); // Desktop size
        });

        const { result } = renderHook(() => useResponsive());

        expect(result.current.isMobile).toBe(false);
        expect(result.current.isTablet).toBe(false);
        expect(result.current.isDesktop).toBe(true);
        expect(result.current.width).toBe(1440);
    });

    it('should update when window is resized', () => {
        act(() => {
            resizeWindow(1200); // Desktop
        });

        const { result } = renderHook(() => useResponsive());

        expect(result.current.isDesktop).toBe(true);
        expect(result.current.width).toBe(1200);

        // Resize to mobile
        act(() => {
            resizeWindow(375);
        });

        expect(result.current.isMobile).toBe(true);
        expect(result.current.isTablet).toBe(false);
        expect(result.current.isDesktop).toBe(false);
        expect(result.current.width).toBe(375);
    });

    it('should handle edge case at 767px (mobile)', () => {
        act(() => {
            resizeWindow(767);
        });

        const { result } = renderHook(() => useResponsive());

        expect(result.current.isMobile).toBe(true);
        expect(result.current.isTablet).toBe(false);
    });

    it('should handle edge case at 1023px (tablet)', () => {
        act(() => {
            resizeWindow(1023);
        });

        const { result } = renderHook(() => useResponsive());

        expect(result.current.isMobile).toBe(false);
        expect(result.current.isTablet).toBe(true);
        expect(result.current.isDesktop).toBe(false);
    });

    it('should handle edge case at 1024px (desktop)', () => {
        act(() => {
            resizeWindow(1024);
        });

        const { result } = renderHook(() => useResponsive());

        expect(result.current.isMobile).toBe(false);
        expect(result.current.isTablet).toBe(false);
        expect(result.current.isDesktop).toBe(true);
    });

    // Note: Lines 22 and 27 handle SSR scenarios where window is undefined.
    // These are defensive programming checks that are difficult to test in JSDOM 
    // environment, but are crucial for SSR frameworks like Next.js.
    describe('Window availability checks', () => {
        it('should initialize correctly when window is available', () => {
            // This tests the "happy path" where window exists (line 22 branch: window.innerWidth)
            const { result } = renderHook(() => useResponsive());

            // Should have a valid width from window
            expect(result.current.width).toBeGreaterThan(0);
            expect(result.current).toHaveProperty('isMobile');
            expect(result.current).toHaveProperty('isTablet');
            expect(result.current).toHaveProperty('isDesktop');
        });

        it('should handle window resize events correctly', () => {
            // This tests the useEffect path when window exists (covers line 27 normal branch)
            act(() => {
                resizeWindow(375);
            });

            const { result } = renderHook(() => useResponsive());

            // useEffect should have run and updated the state
            expect(result.current.isMobile).toBe(true);
            expect(result.current.width).toBe(375);
        });

        it('should cleanup event listeners on unmount', () => {
            const { unmount } = renderHook(() => useResponsive());
            const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

            unmount();

            // Should have removed the resize listener
            expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

            removeEventListenerSpy.mockRestore();
        });
    });
});
