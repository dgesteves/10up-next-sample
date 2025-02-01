'use client';

import { RefObject } from 'react';
import Link from 'next/link';
import { Button } from '../../atoms/Button/Button';
import { ListIcon } from '../../icons/ListIcon/ListIcon';
import { UserIcon } from '../../icons/UserIcon/UserIcon';
import {
  ARIA_CURRENT,
  BURGER_MENU_ARIA_LABEL,
  NAVIGATION_LINKS,
  SIGNUP_ARIA_LABEL,
  SIGNUP_BUTTON_LABEL,
  SIGNUP_BUTTON_MOBILE_SIZE,
  USER_ICON_MOBILE_SIZE,
} from '@/constants';
import { useBurgerMenu } from '@/hooks';
import styles from './BurgerMenu.module.css';

export function BurgerMenu() {
  const {
    pathname,
    isMenuOpen,
    menuRef,
    buttonRef,
    toggleMenu,
    handleKeyDown,
    handleLinkKeyDown,
    handleLinkClick,
    handleSignup,
  } = useBurgerMenu();

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        className={styles.burgerButton}
        aria-label={BURGER_MENU_ARIA_LABEL}
      >
        <ListIcon />
      </button>
      {isMenuOpen && (
        <ul
          ref={menuRef as RefObject<HTMLUListElement>}
          className={styles.menu}
        >
          {NAVIGATION_LINKS.map(({ href, label, ariaLabel }) => (
            <li key={href}>
              <Link
                href={href}
                className={styles.menuLink}
                onKeyDown={handleLinkKeyDown}
                onClick={handleLinkClick}
                aria-label={ariaLabel}
                aria-current={pathname === href ? ARIA_CURRENT : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Button
              onClick={handleSignup}
              size={SIGNUP_BUTTON_MOBILE_SIZE}
              aria-label={SIGNUP_ARIA_LABEL}
              fullWidth
            >
              <UserIcon size={USER_ICON_MOBILE_SIZE} />
              <span
                className={styles.buttonText}
                aria-label={SIGNUP_BUTTON_LABEL}
              >
                {SIGNUP_BUTTON_LABEL}
              </span>
            </Button>
          </li>
        </ul>
      )}
    </>
  );
}
