'use client';

import { useMemo } from 'react';
import { useDeviceType } from '@/hooks';
import {
  COLLECTIONS,
  COLLECTIONS_ROW_ARIA_LABEL,
  DEVICE_CARD_LIMITS,
  SECTION_ARIA_LABEL,
} from '@/constants';
import { CollectionCard, TrendingHeader } from '@/ui';
import styles from './Trending.module.css';

export function Trending() {
  const device = useDeviceType();

  const displayedCollections = useMemo(() => {
    const limit = device ? DEVICE_CARD_LIMITS[device] : COLLECTIONS.length;
    return COLLECTIONS.slice(0, limit);
  }, [device]);

  if (!device) return null;

  return (
    <section className={styles.trendingSection} aria-label={SECTION_ARIA_LABEL}>
      <TrendingHeader />
      <div
        className={styles.collectionCardsRow}
        aria-label={COLLECTIONS_ROW_ARIA_LABEL}
      >
        {displayedCollections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}
