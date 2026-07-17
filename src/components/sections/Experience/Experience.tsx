import { CheckCircle2 } from 'lucide-react';
import { Section } from '../../layout/Section/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../../ui/Reveal/Reveal';
import { experience } from '../../../data/content';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <p className={styles.eyebrow}>Experience</p>
      </Reveal>

      <div className={styles.panel}>
        <Reveal delay={0.05}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.company}>{experience.company}</h2>
              <p className={styles.role}>{experience.role}</p>
            </div>
            <span className={styles.status}>
              <span className={styles.statusDot} />
              {experience.status}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className={styles.summary}>{experience.summary}</p>
        </Reveal>

        <StaggerGroup className={styles.responsibilities}>
          {experience.responsibilities.map((item) => (
            <StaggerItem key={item} className={styles.responsibility}>
              <CheckCircle2 size={16} strokeWidth={1.75} className={styles.checkIcon} />
              <span>{item}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}
