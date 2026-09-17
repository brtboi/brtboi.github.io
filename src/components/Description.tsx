import type { ReactNode } from 'react'
import styles from './Description.module.scss'

export function Subhead({ children }: { children: ReactNode }) {
  return <h4 className={styles.subhead}>{children}</h4>
}

export function Details({ children }: { children: ReactNode }) {
  return <dl className={styles.details}>{children}</dl>
}

export function Detail({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className={styles.detail}>
      <dt><i>{label}</i></dt>
      <dd>{children}</dd>
    </div>
  )
}

export function Columns({ items }: { items: ReactNode[] }) {
  return (
    <ul className={styles.columns}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}
