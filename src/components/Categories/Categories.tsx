import styles from './Categories.module.css';

export function Categories() {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.categoriesHeader}>
        <h2 className={styles.categoriesHeadLine}>Browse Categories</h2>
      </div>
      <div className={styles.categoriesGrid}></div>
    </section>
  );
}
