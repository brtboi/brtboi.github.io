import type { ReactNode } from 'react'
import clsx from 'clsx'
import Reveal from './Reveal'
import styles from './Timeline.module.scss'

export type TimelineEntry = {
  overline: ReactNode
  title: ReactNode
  subtitle: ReactNode
  description: ReactNode
  tags: ReactNode[]
  // optional image shown to the right of the entry; src is relative to /public
  image?: { src: string; alt: string }
}

export default function Timeline({
  id,
  title,
  items,
}: {
  id: string
  title: string
  items: TimelineEntry[]
}) {
  return (
    <section id={id}>
      <ol className={styles.timeline}>
      <Reveal>
        <h2>{title}</h2>
      </Reveal>
        {items.map((item, i) => (
          <li key={i}>
            <Reveal delay={(i % 2) * 60}>
              <div className={clsx(styles.timelineRow, item.image && styles.timelineRowWithImage)}>
                <div>
                  <div className={styles.timelineOverline}>{item.overline}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <div className={styles.timelineSubtitle}>{item.subtitle}</div>
                  <div className={styles.timelineDesc}>{item.description}</div>
                  <ul className={styles.timelineTags}>
                    {item.tags.map((tag, j) => (
                      <li key={j}>{tag}</li>
                    ))}
                  </ul>
                </div>
                {item.image && (
                  <img className={styles.timelineImage} src={item.image.src} alt={item.image.alt} />
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
