import { Section } from '../../layout/Section/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../../ui/Reveal/Reveal';
import { Tag } from '../../ui/Tag/Tag';
import { skillCategories } from '../../../data/content';
import styles from './Skills.module.scss';

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <p className={styles.eyebrow}>Skills</p>
        <h2 className={styles.heading}>The stack behind the interface</h2>
      </Reveal>

      <StaggerGroup className={styles.grid}>
        {skillCategories.map((category) => (
          <StaggerItem
            key={category.id}
            className={`${styles.card} ${category.span === 'wide' ? styles.wide : ''}`}
          >
            <span className={styles.cardLabel}>{category.title}</span>
            <div className={styles.tags}>
              {category.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
