import { KeyboardEventHandler, RefObject, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useClickOutside } from '@/hooks';
import { SIGNUP_ROUTE } from '@/constants';

export function useBurgerMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(menuRef, () => setIsMenuOpen(false), [
    buttonRef as RefObject<HTMLElement>,
  ]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }
  };

  const handleLinkKeyDown: KeyboardEventHandler<HTMLAnchorElement> = (
    event,
  ) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleSignup = () => {
    router.push(SIGNUP_ROUTE);
    setIsMenuOpen(false);
  };

  return {
    pathname,
    isMenuOpen,
    menuRef,
    buttonRef,
    toggleMenu,
    handleKeyDown,
    handleLinkKeyDown,
    handleLinkClick,
    handleSignup,
  };
}
