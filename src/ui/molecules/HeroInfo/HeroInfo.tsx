'use client';

import { memo } from 'react';
import { Button, RocketLaunchIcon } from '@/ui';
import { useRouter } from 'next/navigation';
import {
  CONNECT_WALLET_ROUTE,
  GET_STARTED_BUTTON_TEXT,
  HERO_GET_STARTED_BUTTON_ARIA_LABEL,
  HERO_HEADING_TEXT,
  HERO_INFO_ITEMS,
  HERO_SUB_HEADING_TEXT,
  MOBILE_DEVICE,
  ROCKET_LAUNCH_ICON_SIZE,
} from '@/constants';
import styles from './HeroInfo.module.css';

type HeroInfoProps = {
  device: 'desktop' | 'tablet' | 'mobile';
};

export const HeroInfo = memo(function HeroInfo({ device }: HeroInfoProps) {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(CONNECT_WALLET_ROUTE);
  };

  return (
    <div className={styles.heroTextContainer}>
      <header className={styles.heroText}>
        <h1 className={styles.heroHeadLine}>{HERO_HEADING_TEXT}</h1>
        <p className={styles.heroSubHead}>{HERO_SUB_HEADING_TEXT}</p>
      </header>
      <Button
        fullWidth={device === MOBILE_DEVICE}
        onClick={handleGetStarted}
        aria-label={HERO_GET_STARTED_BUTTON_ARIA_LABEL}
        className={styles.heroButton}
      >
        <RocketLaunchIcon
          size={ROCKET_LAUNCH_ICON_SIZE}
          className={styles.heroButtonIcon}
        />
        <span className={styles.heroButtonText}>{GET_STARTED_BUTTON_TEXT}</span>
      </Button>

      <dl className={styles.heroInfoContainer}>
        {HERO_INFO_ITEMS.map(({ label, value }) => (
          <div key={label} className={styles.heroInfo}>
            <dd className={styles.heroInfoNumber}>{value}</dd>
            <dt className={styles.heroInfoText}>{label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
});
