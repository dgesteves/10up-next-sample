'use client';

import {
  ACCESSIBILITY_ENTER_KEY,
  ACCESSIBILITY_SPACE_KEY,
  ARTISTS_ROUTE,
  DEVICE_ARTISTS_LIMITS,
  TOP_CREATORS,
  TOP_CREATORS_ARTIST_IMAGE_SIZE,
  TOP_CREATORS_ARTIST_TOTAL_SALES_LABEL,
  TOP_CREATORS_CARD_TAB_INDEX,
  TOP_CREATORS_GRID_ROLE,
} from '@/constants';
import Image from 'next/image';
import { KeyboardEvent, memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import styles from './TopCreatorsGrid.module.css';

type TopCreatorsGridProps = {
  device: 'desktop' | 'tablet' | 'mobile';
};

export const TopCreatorsGrid = memo(function TopCreatorsGrid({
  device,
}: TopCreatorsGridProps) {
  const router = useRouter();

  const displayedTopCreators = useMemo(() => {
    const limit = device ? DEVICE_ARTISTS_LIMITS[device] : TOP_CREATORS.length;
    return TOP_CREATORS.slice(0, limit);
  }, [device]);

  const handleArtistClick = (artistId: string) => {
    router.push(`${ARTISTS_ROUTE}${artistId}`);
  };

  const handleKeyDown = (event: KeyboardEvent, artistId: string) => {
    if (
      event.key === ACCESSIBILITY_ENTER_KEY ||
      event.key === ACCESSIBILITY_SPACE_KEY
    ) {
      event.preventDefault();
      handleArtistClick(artistId);
    }
  };

  return (
    <div
      className={styles.topCreatorsGrid}
      role={TOP_CREATORS_GRID_ROLE}
      data-testid="top-creators-grid"
    >
      {displayedTopCreators.map((creator) => (
        <article
          key={creator.id}
          className={styles.topCreatorsGridItem}
          tabIndex={TOP_CREATORS_CARD_TAB_INDEX}
          onClick={() => handleArtistClick(creator.id)}
          onKeyDown={(e) => handleKeyDown(e, creator.id)}
          aria-label={`View ${creator.name}'s profile - Ranked ${creator.position}`}
        >
          <div className={styles.topCreatorsGridItemPositionBadge}>
            <span className={styles.topCreatorsGridItemPositionBadgeText}>
              {creator.position}
            </span>
          </div>
          <Image
            src={creator.imagePath}
            height={TOP_CREATORS_ARTIST_IMAGE_SIZE}
            width={TOP_CREATORS_ARTIST_IMAGE_SIZE}
            alt={creator.imageAlt}
            className={styles.topCreatorsGridItemArtistImage}
          />
          <div className={styles.topCreatorsGridItemArtistInfo}>
            <h3 className={styles.topCreatorsGridItemArtistName}>
              {creator.name}
            </h3>
            <dl className={styles.topCreatorsGridItemArtistAdditionalInfo}>
              <dt className={styles.topCreatorsGridItemArtistTotalSales}>
                {TOP_CREATORS_ARTIST_TOTAL_SALES_LABEL}
              </dt>
              <dd className={styles.topCreatorsGridItemArtistTotalValue}>
                {creator.totalSales} {creator.currency}
              </dd>
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
});
