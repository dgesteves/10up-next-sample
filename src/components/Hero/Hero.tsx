'use client';

import { useDeviceType } from '@/hooks';
import { HERO_SECTION_ARIA_LABEL } from '@/constants';
import { HeroHighlightedNFTCard, HeroInfo } from '@/ui';
import styles from './Hero.module.css';

export function Hero() {
  const device = useDeviceType();

  // If device is not available, return null to prevent layout shift
  if (!device) return null;

  return (
    <section
      className={styles.heroContainer}
      aria-label={HERO_SECTION_ARIA_LABEL}
    >
      <div className={styles.hero}>
        <HeroInfo device={device} />
        <HeroHighlightedNFTCard device={device} />
      </div>
    </section>
  );
}
