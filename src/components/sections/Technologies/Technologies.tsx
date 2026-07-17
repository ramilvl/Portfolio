import { Section } from '../../layout/Section/Section';
import { Reveal } from '../../ui/Reveal/Reveal';
import { technologies } from '../../../data/content';
import styles from './Technologies.module.scss';

const mid = Math.ceil(technologies.length / 2);
const rowA = technologies.slice(0, mid);
const rowB = technologies.slice(mid);

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // Item list is duplicated so the CSS translate loop reads as seamless.
  const looped = [...items, ...items];
  return (
    <div className={`${styles.row} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.track}>
        {looped.map((item, i) => (
          <span className={styles.item} key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Technologies() {
  return (
    <Section id="technologies" bleed>
      <div className={styles.header}>
        <Reveal>
          <p className={styles.eyebrow}>Technologies</p>
        </Reveal>
      </div>
      <div className={styles.marquee}>
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
      </div>
    </Section>
  );
}
