import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BurgerMenu } from './BurgerMenu';
import { useBurgerMenu } from '@/hooks';

jest.mock('../../../hooks');

const mockUseBurgerMenu = useBurgerMenu as jest.MockedFunction<
  typeof useBurgerMenu
>;

describe('BurgerMenu', () => {
  beforeEach(() => {
    mockUseBurgerMenu.mockReturnValue({
      pathname: '/',
      isMenuOpen: false,
      menuRef: { current: null },
      buttonRef: { current: null },
      toggleMenu: jest.fn(),
      handleKeyDown: jest.fn(),
      handleLinkKeyDown: jest.fn(),
      handleLinkClick: jest.fn(),
      handleSignup: jest.fn(),
    });
  });

  it('renders the burger button', () => {
    render(<BurgerMenu />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('toggles the menu when the button is clicked', async () => {
    const user = userEvent.setup();
    const toggleMenu = jest.fn();
    mockUseBurgerMenu.mockReturnValueOnce({
      ...mockUseBurgerMenu(),
      isMenuOpen: false,
      toggleMenu,
    });

    render(<BurgerMenu />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(toggleMenu).toHaveBeenCalled();
  });

  it('displays the menu when isMenuOpen is true', () => {
    mockUseBurgerMenu.mockReturnValueOnce({
      ...mockUseBurgerMenu(),
      isMenuOpen: true,
    });

    render(<BurgerMenu />);
    const menu = screen.getByRole('list');
    expect(menu).toBeInTheDocument();
  });

  it('calls handleSignup when the signup button is clicked', async () => {
    const user = userEvent.setup();
    const handleSignup = jest.fn();
    mockUseBurgerMenu.mockReturnValueOnce({
      ...mockUseBurgerMenu(),
      isMenuOpen: true,
      handleSignup,
    });

    render(<BurgerMenu />);
    const signupButton = screen.getByRole('button', {
      name: /create new user account/i,
    });
    await user.click(signupButton);
    expect(handleSignup).toHaveBeenCalled();
  });
});
