import { renderHook, act } from '@testing-library/react';
import { useProjectPagination } from '../useProjectPagination';

describe('useProjectPagination', () => {
  test('starts at the first project and exposes navigation flags', () => {
    const { result } = renderHook(() => useProjectPagination(3));

    expect(result.current.currentIndex).toBe(0);
    expect(result.current.hasNext).toBe(true);
    expect(result.current.hasPrev).toBe(false);
  });

  test('moves forward until the last project and then stops', () => {
    const { result } = renderHook(() => useProjectPagination(3));

    act(() => {
      result.current.nextProject();
    });
    expect(result.current.currentIndex).toBe(1);
    expect(result.current.hasNext).toBe(true);
    expect(result.current.hasPrev).toBe(true);

    act(() => {
      result.current.nextProject();
    });
    expect(result.current.currentIndex).toBe(2);
    expect(result.current.hasNext).toBe(false);
    expect(result.current.hasPrev).toBe(true);

    act(() => {
      result.current.nextProject();
    });
    expect(result.current.currentIndex).toBe(2);
  });

  test('moves backward until the first project and then stops', () => {
    const { result } = renderHook(() => useProjectPagination(3));

    act(() => {
      result.current.nextProject();
      result.current.nextProject();
    });
    expect(result.current.currentIndex).toBe(2);

    act(() => {
      result.current.prevProject();
    });
    expect(result.current.currentIndex).toBe(1);
    expect(result.current.hasPrev).toBe(true);

    act(() => {
      result.current.prevProject();
    });
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.hasPrev).toBe(false);

    act(() => {
      result.current.prevProject();
    });
    expect(result.current.currentIndex).toBe(0);
  });
});
