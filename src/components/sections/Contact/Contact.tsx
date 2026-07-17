import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Section } from '../../layout/Section/Section';
import { Reveal } from '../../ui/Reveal/Reveal';
import { BrandIcon } from '../../ui/BrandIcon/BrandIcon';
import { profile, socials } from '../../../data/content';
import styles from './Contact.module.scss';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — mailto link below still works.
    }
  };

  const linkedin = socials.find((s) => s.label === 'LinkedIn');
  const github = socials.find((s) => s.label === 'GitHub');

  return (
    <Section id="contact" divider={false}>
      <div className={styles.layout}>
        <Reveal>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.subtext}>
            For roles, collaboration, or questions about the work above — reach out directly.
          </p>
        </Reveal>

        <Reveal delay={0.1} className={styles.emailRow}>
          <a href={`mailto:${profile.email}`} className={styles.emailLink}>
            {profile.email}
          </a>
          <button
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label="Copy email address"
          >
            {copied ? <Check size={16} strokeWidth={2} /> : <Copy size={16} strokeWidth={1.75} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </Reveal>

        <Reveal delay={0.16} className={styles.footer}>
          <span className={styles.location}>{profile.location}</span>
          <div className={styles.socialLinks}>
            {github && (
              <a href={github.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                <BrandIcon name="github" size={16} />
                <span>{github.handle}</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <BrandIcon name="linkedin" size={16} />
                <span>{linkedin.handle}</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
