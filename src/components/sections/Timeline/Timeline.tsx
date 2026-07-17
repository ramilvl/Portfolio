import { Briefcase, GraduationCap } from 'lucide-react';
import { Section } from '../../layout/Section/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../../ui/Reveal/Reveal';
import { timeline } from '../../../data/content';
import styles from './Timeline.module.scss';

export function Timeline() {
  return (
    <Section id="timeline">
      <Reveal>
        <p className={styles.eyebrow}>Career timeline</p>
        <h2 className={styles.heading}>Where the experience comes from</h2>
      </Reveal>

      <StaggerGroup className={styles.list}>
        {timeline.map((entry) => (
          <StaggerItem key={entry.id} className={styles.entry}>
            <div className={styles.rail}>
              <span className={`${styles.node} ${entry.current ? styles.nodeCurrent : ''}`}>
                {entry.type === 'work' ? (
                  <Briefcase size={14} strokeWidth={1.75} />
                ) : (
                  <GraduationCap size={14} strokeWidth={1.75} />
                )}
              </span>
              <span className={styles.line} />
            </div>
            <div className={styles.content}>
              <div className={styles.contentTop}>
                <h3 className={styles.title}>{entry.title}</h3>
                <span className={`${styles.period} ${entry.current ? styles.periodCurrent : ''}`}>
                  {entry.period}
                </span>
              </div>
              <p className={styles.org}>{entry.org}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
