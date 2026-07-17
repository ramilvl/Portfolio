import { Section } from '../../layout/Section/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../../ui/Reveal/Reveal';
import { Tag } from '../../ui/Tag/Tag';
import { projects } from '../../../data/content';
import styles from './Projects.module.scss';

const featured = projects.find((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <p className={styles.eyebrow}>Featured projects</p>
        <h2 className={styles.heading}>Systems shipped and maintained in production</h2>
      </Reveal>

      {featured && (
        <Reveal delay={0.1} className={styles.featuredWrap}>
          <article className={styles.featured}>
            <div className={styles.featuredContent}>
              <span className={styles.kind}>{featured.kind}</span>
              <h3 className={styles.featuredName}>{featured.name}</h3>
              <p className={styles.featuredDescription}>{featured.description}</p>
              <div className={styles.tags}>
                {featured.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            <div className={styles.visual} aria-hidden="true">
              <div className={styles.visualBars}>
                <span style={{ height: '38%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '90%' }} />
                <span style={{ height: '64%' }} />
                <span style={{ height: '46%' }} />
              </div>
              <div className={styles.visualLine} />
            </div>
          </article>
        </Reveal>
      )}

      <StaggerGroup className={styles.grid}>
        {rest.map((project) => (
          <StaggerItem key={project.id} className={styles.card}>
            <span className={styles.kind}>{project.kind}</span>
            <h3 className={styles.cardName}>{project.name}</h3>
            <p className={styles.cardDescription}>{project.description}</p>

            {project.features && (
              <ul className={styles.features}>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}

            <div className={styles.tags}>
              {project.tech.map((tech) => (
                <Tag key={tech} muted>
                  {tech}
                </Tag>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
