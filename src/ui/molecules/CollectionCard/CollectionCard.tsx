'use client';

import Image from 'next/image';
import { Collection } from '@/types';
import { MouseEvent, KeyboardEvent, memo, useCallback } from 'react';
import { CollectionSubImages } from '../CollectionSubImages/CollectionSubImages';
import { CollectionInfo } from '../CollectionInfo/CollectionInfo';
import { useRouter } from 'next/navigation';
import {
  ACCESSIBILITY_ENTER_KEY,
  COLLECTION_MAIN_IMAGE_SIZE,
  COLLECTION_NFT_ARIA_LABEL,
  COLLECTION_NFTS_ROUTE,
  DEFAULT_TAB_INDEX,
} from '@/constants';
import styles from './CollectionCard.module.css';

type CollectionCardProps = {
  collection: Collection;
};

export const CollectionCard = memo(function CollectionCard({
  collection,
}: CollectionCardProps) {
  const router = useRouter();

  const handleNavigation = useCallback(
    (e: MouseEvent | KeyboardEvent, path: string) => {
      if (
        e.type === 'click' ||
        (e.type === 'keydown' &&
          (e as KeyboardEvent).key === ACCESSIBILITY_ENTER_KEY)
      ) {
        e.preventDefault();
        router.push(path);
      }
    },
    [router],
  );

  return (
    <article className={styles.collectionCard}>
      <div
        className={styles.collectionCardImagesContainer}
        aria-label={`${COLLECTION_NFT_ARIA_LABEL} ${collection.title}`}
      >
        <Image
          tabIndex={DEFAULT_TAB_INDEX}
          src={collection.mainImage.src}
          width={COLLECTION_MAIN_IMAGE_SIZE}
          height={COLLECTION_MAIN_IMAGE_SIZE}
          alt={collection.mainImage.alt}
          onClick={(e) =>
            handleNavigation(
              e,
              `${COLLECTION_NFTS_ROUTE}${collection.mainImage.id}`,
            )
          }
          onKeyDown={(e) =>
            handleNavigation(
              e,
              `${COLLECTION_NFTS_ROUTE}${collection.mainImage.id}`,
            )
          }
          className={styles.collectionCardMainImage}
        />
        <CollectionSubImages
          collection={collection}
          handleNavigation={handleNavigation}
        />
      </div>
      <CollectionInfo collection={collection} />
    </article>
  );
});
