import clsx from 'clsx'
import Reveal from './Reveal'
import styles from './Timeline.module.scss'

type TimelineEntry = {
  period: string
  title: string
  org: string
  description: string[] | string
  tags: string[]
}

export default function Timeline({
  id,
  title,
  items,
  showImages = true,
}: {
  id: string
  title: string
  items: TimelineEntry[]
  showImages?: boolean
}) {
  return (
    <section id={id}>
      <ol className={styles.timeline}>
      <Reveal>
        <h2>{title}</h2>
      </Reveal>
        {items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={(i % 2) * 60}>
              <div
                className={clsx(styles.timelineRow, !showImages && styles.timelineRowTextOnly)}
              >
                <div>
                  <p className={styles.timelinePeriod}>{item.period}</p>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineOrg}>{item.org}</p>
                  <p className={styles.timelineDesc}>{item.description}</p>
                  <ul className={styles.timelineTags}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                {showImages && (
                  <div className={styles.timelineImage} aria-hidden="true">
                    <span>Image</span>
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
