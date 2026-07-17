import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { profile } from '../../../data/content';
import styles from './Navbar.module.scss';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(['hero', ...LINKS.map((l) => l.id), 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          aria-label="Back to top"
        >
          <span className={styles.logoMark}>{profile.initials}</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={styles.indicator}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <button className={styles.cta} onClick={() => handleNavClick('contact')}>
          <span>Contact</span>
          <ArrowUpRight size={15} strokeWidth={2} />
        </button>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobilePanel}>
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`${styles.mobileLink} ${activeId === link.id ? styles.active : ''}`}
              onClick={() => handleNavClick(link.id)}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.label}
            </button>
          ))}
          <button className={styles.mobileLink} onClick={() => handleNavClick('contact')}>
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
