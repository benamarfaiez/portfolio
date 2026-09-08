import { renderHook, act } from '@testing-library/react';
import { useBackNavigation } from '../useBackNavigation';

const mockNavigate = jest.fn();
let mockLocation: { state: { from?: string } | null };

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

describe('useBackNavigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLocation = { state: null };
  });

  test('navigates to the previous page when the user came from the list', () => {
    mockLocation = { state: { from: 'list' } };
    const { result } = renderHook(() => useBackNavigation());

    act(() => {
      result.current();
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('navigates to the fallback path when there is no list origin', () => {
    const { result } = renderHook(() => useBackNavigation('/custom-path'));

    act(() => {
      result.current();
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/custom-path');
  });
});
