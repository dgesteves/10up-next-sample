'use client';

import Image from 'next/image';
import Link from 'next/link';
import { KeyboardEvent, memo, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import {
  ARTICLE_ARIA_LABEL,
  ARTICLE_BUTTON_ROLE,
  ARTICLE_TAB_INDEX,
  ENTER_KEY,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
  NFT_HIGHLIGHTED_ARTIST,
  NFT_HIGHLIGHTED_ARTIST_IMAGE,
  NFT_HIGHLIGHTED_ARTIST_IMAGE_ALT,
  NFT_HIGHLIGHTED_ARTIST_IMAGE_SIZE,
  NFT_HIGHLIGHTED_ARTIST_LINK_ARIA_LABEL,
  NFT_HIGHLIGHTED_ARTIST_ROUTE,
  NFT_HIGHLIGHTED_IMAGE,
  NFT_HIGHLIGHTED_IMAGE_ALT,
  NFT_HIGHLIGHTED_NAME,
  NFT_HIGHLIGHTED_TEXT_CONTAINER_ARIA_LABEL,
  NFT_SPACE_WALKING_ROUTE,
  SPACE_KEY,
} from '@/constants';
import styles from './HeroHighlightedNFTCard.module.css';

type HeroHighlightedNFTCardProps = {
  device: 'desktop' | 'tablet' | 'mobile';
};

export const HeroHighlightedNFTCard = memo(function HeroHighlightedNFTCard({
  device,
}: HeroHighlightedNFTCardProps) {
  const router = useRouter();

  const handleNFTSelection = () => {
    router.push(NFT_SPACE_WALKING_ROUTE);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
      event.preventDefault();
      handleNFTSelection();
    }
  };

  const handleArtistEvents = (event: MouseEvent | KeyboardEvent) => {
    event.stopPropagation();
  };

  return (
    <article
      className={styles.heroHighlightedNFTCard}
      onClick={handleNFTSelection}
      onKeyDown={handleKeyDown}
      tabIndex={ARTICLE_TAB_INDEX}
      role={ARTICLE_BUTTON_ROLE}
      aria-label={ARTICLE_ARIA_LABEL}
    >
      <Image
        src={NFT_HIGHLIGHTED_IMAGE}
        width={HERO_IMAGE_WIDTH[device]}
        height={HERO_IMAGE_HEIGHT[device]}
        alt={NFT_HIGHLIGHTED_IMAGE_ALT}
        priority
        className={styles.heroHighlightedImage}
      />
      <div
        className={styles.heroHighlightedTextContainer}
        aria-label={NFT_HIGHLIGHTED_TEXT_CONTAINER_ARIA_LABEL}
      >
        <h2 className={styles.heroHighlightedText}>{NFT_HIGHLIGHTED_NAME}</h2>
        <Link
          href={NFT_HIGHLIGHTED_ARTIST_ROUTE}
          onClick={handleArtistEvents}
          onKeyDown={handleArtistEvents}
          className={styles.heroHighlightedArtist}
          aria-label={NFT_HIGHLIGHTED_ARTIST_LINK_ARIA_LABEL}
        >
          <Image
            src={NFT_HIGHLIGHTED_ARTIST_IMAGE}
            width={NFT_HIGHLIGHTED_ARTIST_IMAGE_SIZE}
            height={NFT_HIGHLIGHTED_ARTIST_IMAGE_SIZE}
            alt={NFT_HIGHLIGHTED_ARTIST_IMAGE_ALT}
            className={styles.heroHighlightedArtistImage}
          />
          <span className={styles.heroHighlightedArtistName}>
            {NFT_HIGHLIGHTED_ARTIST}
          </span>
        </Link>
      </div>
    </article>
  );
});
