import {
  TRENDING_COLLECTIONS_HEADLINE,
  TRENDING_COLLECTIONS_SUB_HEADLINE,
} from '@/constants';
import styles from './TrendingHeader.module.css';

export function TrendingHeader() {
  return (
    <header className={styles.sectionHeadlineContainer}>
      <h2 className={styles.sectionHeadline}>
        {TRENDING_COLLECTIONS_HEADLINE}
      </h2>
      <p className={styles.sectionSubHeadline}>
        {TRENDING_COLLECTIONS_SUB_HEADLINE}
      </p>
    </header>
  );
}
