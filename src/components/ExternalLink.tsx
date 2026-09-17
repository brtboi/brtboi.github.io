import type { ReactNode } from 'react'
import { MdOpenInNew } from 'react-icons/md'
import styles from './ExternalLink.module.scss'

export default function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
      {children}
      <MdOpenInNew className={styles.icon} aria-hidden="true" />
    </a>
  )
}
