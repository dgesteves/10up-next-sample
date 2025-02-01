'use client';

import { TopCreatorsGrid, TopCreatorsHeader } from '@/ui';
import { TOP_CREATORS_SECTION_ARIA_LABEL } from '@/constants/topCreators';
import { useDeviceType } from '@/hooks';
import styles from './TopCreators.module.css';

export function TopCreators() {
  const device = useDeviceType();

  if (!device) return null;

  return (
    <section
      className={styles.topCreatorsSection}
      aria-label={TOP_CREATORS_SECTION_ARIA_LABEL}
    >
      <TopCreatorsHeader device={device} />
      <TopCreatorsGrid device={device} />
    </section>
  );
}
