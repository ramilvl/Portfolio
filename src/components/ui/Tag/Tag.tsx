import styles from './Tag.module.scss';

interface TagProps {
  children: string;
  muted?: boolean;
}

export function Tag({ children, muted = false }: TagProps) {
  return <span className={`${styles.tag} ${muted ? styles.muted : ''}`}>{children}</span>;
}
