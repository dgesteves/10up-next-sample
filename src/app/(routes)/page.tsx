import type { Metadata } from 'next';
import { Categories, Hero, TopCreators, Trending } from '@/components';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description: 'Buy, sell, and trade NFTs on the blockchain.',
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Trending />
      <TopCreators />
      <Categories />
    </main>
  );
}
