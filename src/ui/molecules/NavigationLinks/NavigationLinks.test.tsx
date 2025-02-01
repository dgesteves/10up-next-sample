import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter, usePathname } from 'next/navigation';
import { NavigationLinks } from './NavigationLinks';
import {
  NAVIGATION_LINKS,
  SIGNUP_BUTTON_LABEL,
  SIGNUP_ROUTE,
} from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('NavigationLinks', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders navigation links', () => {
    render(<NavigationLinks />);
    NAVIGATION_LINKS.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('navigates to the correct route when a link is clicked', () => {
    const user = userEvent.setup();

    render(<NavigationLinks />);
    NAVIGATION_LINKS.forEach(({ href, label }) => {
      const link = screen.getByText(label);
      user.click(link);
      expect(link.closest('a')).toHaveAttribute('href', href);
    });
  });

  it('navigates to the signup route when the signup button is clicked', async () => {
    const user = userEvent.setup();

    render(<NavigationLinks />);
    const signupButton = screen.getByText(SIGNUP_BUTTON_LABEL);
    await user.click(signupButton);
    expect(mockPush).toHaveBeenCalledWith(SIGNUP_ROUTE);
  });
});
