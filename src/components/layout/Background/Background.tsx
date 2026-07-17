import styles from './Background.module.scss';

/**
 * Fixed, decorative, behind all content. Three soft glows drift slowly
 * to keep the dark theme from feeling static, without ever competing
 * with foreground content for attention.
 */
export function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.glow} ${styles.glowOne}`} />
      <div className={`${styles.glow} ${styles.glowTwo}`} />
      <div className={`${styles.glow} ${styles.glowThree}`} />
      <div className={styles.vignette} />
    </div>
  );
}
