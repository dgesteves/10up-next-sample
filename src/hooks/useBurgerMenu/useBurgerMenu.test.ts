import { renderHook, act } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { KeyboardEvent } from 'react';
import { useBurgerMenu } from './useBurgerMenu';
import { SIGNUP_ROUTE } from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/'),
}));

describe('useBurgerMenu', () => {
  const push = jest.fn();
  const mockRouter = { push };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should toggle menu open and close', () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(false);
  });

  it('should close menu on Escape key press', () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    act(() => {
      result.current.handleKeyDown({
        key: 'Escape',
      } as KeyboardEvent<HTMLButtonElement>);
    });

    expect(result.current.isMenuOpen).toBe(false);
  });

  it('should close menu on link click', () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    act(() => {
      result.current.handleLinkClick();
    });

    expect(result.current.isMenuOpen).toBe(false);
  });

  it('should navigate to signup route on handleSignup', () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.handleSignup();
    });

    expect(push).toHaveBeenCalledWith(SIGNUP_ROUTE);
    expect(result.current.isMenuOpen).toBe(false);
  });
});
