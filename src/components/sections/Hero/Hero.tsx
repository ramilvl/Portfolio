import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '../../ui/Button/Button';
import { BrandIcon } from '../../ui/BrandIcon/BrandIcon';
import { OrbitGraphic } from './OrbitGraphic';
import { profile, socials, experience } from '../../../data/content';
import styles from './Hero.module.scss';

const EASE = [0.16, 1, 0.3, 1] as const;

const headlineLines = ['Enterprise interfaces,', 'engineered to hold.'];

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {profile.title.toUpperCase()} · {profile.location.toUpperCase()}
          </motion.p>

          <h1 className={styles.headline}>
            {headlineLines.map((line, lineIndex) => (
              <span key={line} className={styles.headlineLine}>
                {line.split(' ').map((word, wordIndex) => (
                  <span key={word} className={styles.wordMask}>
                    <motion.span
                      className={styles.word}
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15 + lineIndex * 0.12 + wordIndex * 0.07,
                        ease: EASE,
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className={styles.subhead}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            {profile.name} builds the frontend layer of enterprise systems at{' '}
            {experience.company} — React and TypeScript applications designed to stay reliable
            long after launch.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68, ease: EASE }}
          >
            <Button
              href="#projects"
              icon={<ArrowUpRight size={16} />}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View projects
            </Button>
            <Button
              variant="secondary"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in touch
            </Button>
          </motion.div>

          <motion.div
            className={styles.meta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          >
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.metaText}>
              Currently building at <strong>{experience.company}</strong>
            </span>
            <div className={styles.socialRow}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className={styles.socialLink}
                >
                  {social.label === 'GitHub' && <BrandIcon name="github" size={17} />}
                  {social.label === 'LinkedIn' && <BrandIcon name="linkedin" size={17} />}
                  {social.label === 'Email' && <Mail size={17} strokeWidth={1.75} />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.graphicWrap}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        >
          <OrbitGraphic />
        </motion.div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
