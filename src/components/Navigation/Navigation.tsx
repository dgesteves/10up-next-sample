'use client';

import { useMemo } from 'react';
import { MAX_TABLET_WIDTH, NAVIGATION_ARIA_LABEL } from '@/constants';
import { useWindowSize } from '@/hooks';
import { NavigationLinks, HomeLink, BurgerMenu } from '@/ui';
import styles from './Navigation.module.css';

export function Navigation() {
  const { width } = useWindowSize();

  const isDesktop = useMemo(
    () => Boolean((width ?? 0) > MAX_TABLET_WIDTH),
    [width],
  );

  if (!width) return null;

  return (
    <header aria-label={NAVIGATION_ARIA_LABEL}>
      <nav className={styles.navigation} aria-label={NAVIGATION_ARIA_LABEL}>
        <HomeLink isDesktop={isDesktop} />
        {isDesktop && <NavigationLinks />}
        {!isDesktop && <BurgerMenu />}
      </nav>
    </header>
  );
}
