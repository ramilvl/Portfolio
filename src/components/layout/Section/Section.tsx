import type { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Skip the max-width container — used by full-bleed content like the marquee. */
  bleed?: boolean;
  divider?: boolean;
}

export function Section({ id, children, className, bleed = false, divider = true }: SectionProps) {
  const classes = [styles.section, divider ? styles.divider : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {bleed ? children : <div className={styles.container}>{children}</div>}
    </section>
  );
}
