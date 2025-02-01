'use client';

import { useRouter } from 'next/navigation';
import { Button, RocketLaunchIcon } from '@/ui';
import { memo } from 'react';
import {
  RANKINGS_ROUTE,
  TOP_CREATORS_BUTTON_ARIA_LABEL,
  TOP_CREATORS_BUTTON_ICON_COLOR,
  TOP_CREATORS_BUTTON_ICON_SIZE,
  TOP_CREATORS_BUTTON_SIZE,
  TOP_CREATORS_BUTTON_TEXT,
  TOP_CREATORS_BUTTON_VARIANT,
  TOP_CREATORS_HEADLINE,
  TOP_CREATORS_SUB_HEADLINE,
} from '@/constants';
import styles from './TopCreatorsHeader.module.css';

type TopCreatorsHeaderProps = {
  device: 'mobile' | 'desktop' | 'tablet';
};

export const TopCreatorsHeader = memo(function TopCreatorsHeader({
  device,
}: TopCreatorsHeaderProps) {
  const router = useRouter();

  const handleViewRankingsClick = () => {
    router.push(RANKINGS_ROUTE);
  };

  return (
    <header className={styles.topCreatorsHeadlineContainer}>
      <div className={styles.topCreatorsTextContainer}>
        <h2 className={styles.topCreatorsHeadline}>{TOP_CREATORS_HEADLINE}</h2>
        <p className={styles.topCreatorsSubHeadline}>
          {TOP_CREATORS_SUB_HEADLINE}
        </p>
      </div>
      <Button
        fullWidth={device === 'mobile'}
        variant={TOP_CREATORS_BUTTON_VARIANT}
        size={TOP_CREATORS_BUTTON_SIZE}
        onClick={handleViewRankingsClick}
        aria-label={TOP_CREATORS_BUTTON_ARIA_LABEL}
      >
        <RocketLaunchIcon
          size={TOP_CREATORS_BUTTON_ICON_SIZE}
          color={TOP_CREATORS_BUTTON_ICON_COLOR}
        />
        <span className={styles.topCreatorsButtonText}>
          {TOP_CREATORS_BUTTON_TEXT}
        </span>
      </Button>
    </header>
  );
});
