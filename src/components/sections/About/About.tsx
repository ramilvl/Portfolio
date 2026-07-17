import { Section } from '../../layout/Section/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../../ui/Reveal/Reveal';
import { about, languages } from '../../../data/content';
import styles from './About.module.scss';

export function About() {
  const [lede, ...rest] = about.paragraphs;

  return (
    <Section id="about">
      <div className={styles.grid}>
        <Reveal className={styles.rail}>
          <p className={styles.eyebrow}>About</p>
          <StaggerGroup className={styles.facts}>
            {about.facts.map((fact) => (
              <StaggerItem key={fact.label} className={styles.fact}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className={styles.languages}>
            <span className={styles.factLabel}>Languages</span>
            <ul className={styles.languageList}>
              {languages.map((lang) => (
                <li key={lang.name}>
                  {lang.name}
                  {lang.note && <span className={styles.langNote}> — {lang.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className={styles.prose}>
          <Reveal delay={0.05}>
            <p className={styles.lede}>{lede}</p>
          </Reveal>
          {rest.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.06}>
              <p className={styles.paragraph}>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
