import { render, screen } from '@testing-library/react';
import { useRouter, usePathname } from 'next/navigation';
import { Navigation } from './Navigation';
import { useWindowSize, useBurgerMenu } from '@/hooks';

jest.mock('../../hooks');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Navigation', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue('/');
    (useBurgerMenu as jest.Mock).mockReturnValue({
      pathname: '/',
      isMenuOpen: false,
      menuRef: { current: null },
      buttonRef: { current: null },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders HomeLink component', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('renders NavigationLinks component when width is greater than MAX_TABLET_WIDTH', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 });
    render(<Navigation />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders BurgerMenu component when width is less than or equal to MAX_TABLET_WIDTH', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 768 });
    render(<Navigation />);
    expect(
      screen.getByRole('button', { name: /burger menu/i }),
    ).toBeInTheDocument();
  });
});
