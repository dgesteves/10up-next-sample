'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '@/types';
import { KeyboardEvent, memo, MouseEvent } from 'react';
import {
  COLLECTION_NFTS_ROUTE,
  COLLECTION_SUB_IMAGE_SIZE,
  COLLECTIONS_ROUTE,
  DEFAULT_TAB_INDEX,
} from '@/constants';
import styles from './CollectionSubImages.module.css';

type CollectionSubImagesProps = {
  collection: Collection;
  handleNavigation: (e: MouseEvent | KeyboardEvent, path: string) => void;
};

export const CollectionSubImages = memo(function CollectionSubImages({
  collection,
  handleNavigation,
}: CollectionSubImagesProps) {
  return (
    <div
      className={styles.collectionCardSubImages}
      aria-label={`Additional NFTs from ${collection.title}`}
    >
      {collection.subImages.map((subImage) => (
        <Image
          tabIndex={DEFAULT_TAB_INDEX}
          key={subImage.id}
          src={subImage.src}
          width={COLLECTION_SUB_IMAGE_SIZE}
          height={COLLECTION_SUB_IMAGE_SIZE}
          alt={subImage.alt}
          onClick={(e) =>
            handleNavigation(e, `${COLLECTION_NFTS_ROUTE}${subImage.id}`)
          }
          onKeyDown={(e) =>
            handleNavigation(e, `${COLLECTION_NFTS_ROUTE}${subImage.id}`)
          }
          className={styles.collectionCardSubImage}
        />
      ))}
      <Link
        className={styles.collectionCardAdditionalImages}
        href={`${COLLECTIONS_ROUTE}${collection.id}`}
        aria-label={`View all ${collection.totalItems} items in ${collection.title}`}
      >
        <span className={styles.collectionCardAdditionalImagesText}>
          {collection.totalItems}+
        </span>
      </Link>
    </div>
  );
});
