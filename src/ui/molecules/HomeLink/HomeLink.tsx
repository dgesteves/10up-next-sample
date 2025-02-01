import Link from 'next/link';
import { memo } from 'react';
import {
  APP_LOGO_ICON_DESKTOP_SIZE,
  APP_LOGO_ICON_MOBILE_SIZE,
  APP_LOGO_ICON_TEST_ID,
  APP_NAME_ICON_ARIA_LABEL,
  APP_TEXT_LOGO_DESKTOP_HEIGHT,
  APP_TEXT_LOGO_DESKTOP_WIDTH,
  APP_TEXT_LOGO_MOBILE_HEIGHT,
  APP_TEXT_LOGO_MOBILE_WIDTH,
  APP_TEXT_LOGO_TEST_ID,
  HOME_ARIA_LABEL,
  HOME_ROUTE,
} from '@/constants';
import { AppLogoIcon } from '../../icons/AppLogoIcon/AppLogoIcon';
import { AppTextLogoIcon } from '../../icons/AppTextLogoIcon/AppTextLogoIcon';
import styles from './HomeLink.module.css';

type HomeLinkProps = {
  isDesktop: boolean;
};

export const HomeLink = memo(function HomeLink({ isDesktop }: HomeLinkProps) {
  return (
    <Link
      href={HOME_ROUTE}
      className={styles.logoHomeLink}
      aria-label={HOME_ARIA_LABEL}
    >
      <AppLogoIcon
        data-testid={APP_LOGO_ICON_TEST_ID}
        aria-label={APP_NAME_ICON_ARIA_LABEL}
        size={
          isDesktop ? APP_LOGO_ICON_DESKTOP_SIZE : APP_LOGO_ICON_MOBILE_SIZE
        }
      />
      <AppTextLogoIcon
        data-testid={APP_TEXT_LOGO_TEST_ID}
        width={
          isDesktop ? APP_TEXT_LOGO_DESKTOP_WIDTH : APP_TEXT_LOGO_MOBILE_WIDTH
        }
        height={
          isDesktop ? APP_TEXT_LOGO_DESKTOP_HEIGHT : APP_TEXT_LOGO_MOBILE_HEIGHT
        }
      />
    </Link>
  );
});
