import { ArrowUp } from 'lucide-react';
import { profile } from '../../../data/content';
import styles from './Footer.module.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {profile.name}. Built with React, TypeScript &amp; SCSS.
        </p>
        <button
          className={styles.toTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUp size={15} strokeWidth={1.75} />
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
}
