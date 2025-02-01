'use client';

import {
  ARIA_CURRENT,
  NAVIGATION_LINKS,
  SIGNUP_ARIA_LABEL,
  SIGNUP_BUTTON_LABEL,
  SIGNUP_ROUTE,
  USER_ICON_SIZE,
} from '@/constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../../atoms/Button/Button';
import { UserIcon } from '../../icons/UserIcon/UserIcon';
import styles from './NavigationLinks.module.css';

export function NavigationLinks() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignup = () => {
    router.push(SIGNUP_ROUTE);
  };

  return (
    <ul className={styles.navLinks}>
      {NAVIGATION_LINKS.map(({ href, label, ariaLabel }) => (
        <li key={href}>
          <Link
            className={styles.navLink}
            href={href}
            aria-label={ariaLabel}
            aria-current={pathname === href ? ARIA_CURRENT : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
      <li>
        <Button onClick={handleSignup} aria-label={SIGNUP_ARIA_LABEL}>
          <UserIcon size={USER_ICON_SIZE} />
          <span className={styles.buttonText} aria-label={SIGNUP_BUTTON_LABEL}>
            {SIGNUP_BUTTON_LABEL}
          </span>
        </Button>
      </li>
    </ul>
  );
}
