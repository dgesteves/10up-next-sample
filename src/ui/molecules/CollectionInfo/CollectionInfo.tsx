import Link from 'next/link';
import Image from 'next/image';
import { Collection } from '@/types';
import { memo } from 'react';
import {
  ARTIST_AVATAR_SIZE,
  ARTISTS_ROUTE,
  COLLECTIONS_ROUTE,
} from '@/constants';
import styles from './CollectionInfo.module.css';

type CollectionInfoProps = {
  collection: Collection;
};

export const CollectionInfo = memo(function CollectionInfo({
  collection,
}: CollectionInfoProps) {
  return (
    <div className={styles.collectionCardInfo}>
      <Link
        className={styles.collectionCardTitle}
        href={`${COLLECTIONS_ROUTE}${collection.id}`}
        aria-label={`View ${collection.title} collection`}
      >
        {collection.title}
      </Link>
      <Link
        className={styles.collectionCardAuthor}
        href={`${ARTISTS_ROUTE}${collection.artist.id}`}
        aria-label={`View artist ${collection.artist.name}'s profile`}
      >
        <Image
          src={collection.artist.avatar}
          width={ARTIST_AVATAR_SIZE}
          height={ARTIST_AVATAR_SIZE}
          alt={`Avatar of ${collection.artist.name}`}
          className={styles.collectionCardAuthorImage}
        />
        <span className={styles.collectionCardAuthorName}>
          {collection.artist.name}
        </span>
      </Link>
    </div>
  );
});
